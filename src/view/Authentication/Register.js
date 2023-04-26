import React, { useMemo, useState } from "react";
import { reactLocalStorage } from "reactjs-localstorage";
import AuthBtn from "../../Component/AuthCard/AuthBtn";
import AuthInputBox from "../../Component/AuthCard/AuthInputBox";
import AuthUi from "../../Component/AuthCard/AuthUi";
import { useNavigate } from "react-router-dom";
import { getRegister } from "../../api/authapi";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { fetchuser } from "../../redux/reducers/User";

var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loading, setLoading] = useState(false)

  const emailChangeHandle = (val) => {
    setEmailError("");
    setEmail(val);
    passwordChecking();
  };
  const passwordChangeHandle = (val) => {
    setPasswordError("");
    emailChecking();
    setPassword(val);
  };

  function emailChecking() {
    if (email === "") {
      setEmailError("Email cannot be blank.");
    } else if (email != "" && !email.match(mailformat)) {
      setEmailError("Please enter valid email");
    } else {
      setEmailError("");
    }
  }

  function passwordChecking() {
    // if(password ==="" && email !=""){
    //   setPasswordError("Password cannot be blank.")
    // }
    if (password != "" && password.length < 6) {
      setPasswordError(
        `Please lengthen this text to 6 characters or more (you are currently using ${password.length} characters )`
      );
    } else {
      setPasswordError("");
    }
  }

  const validation = useMemo(() => {
    if (
      email != "" &&
      email.match(mailformat) &&
      password != "" &&
      password.length >= 6 &&
      emailError == "" &&
      passwordError == ""
    ) {
      return true;
    } else {
      return false;
    }
  }, [email, password, emailError, passwordError]);

  const Submit = async (e) => {
    document.body.style.opacity="0.3"

    e.preventDefault();
    if (validation) {
      let data = {
        email,
        password,
        nextURL: "/welcome"
      };


      // return false;
      let result = await getRegister(data);
      // console.log(result);
      if (result && result.status) {

        reactLocalStorage.set("token", result.data.token);
        reactLocalStorage.set("tutorial",true)

        setTimeout(() => {
          document.body.style.opacity="1"
          dispatch(fetchuser())
          navigate("/welcome")

        }, 2000)

      } else {
        document.body.style.opacity="1"

        toast.error(result.message, {
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        });      }
    } else {
      document.body.style.opacity="1"

      emailChecking();
      passwordChecking();
    }
  };



  return (
    <AuthUi>
      <form style={{ position: "relative", zIndex: 10 }} className="form">
        <h1>Register your Account</h1>
        <AuthInputBox
          label="Enter Your Email Address"
          placeholder="Please provide your email"
          value={email}
          onChange={(val) => emailChangeHandle(val.target.value)}
        />
        {emailError && <p style={{ color: "red" }}>{emailError}</p>}

        <AuthInputBox
          type="password"
          label="Enter Your Password"
          style={{ margin: "30px 0" }}
          placeholder="Enter your password"
          value={password}
          onChange={(val) => passwordChangeHandle(val.target.value)}
          onClick={() => emailChecking()}
        />
        {passwordError && <p style={{ color: "red" }}>{passwordError}</p>}
        <AuthBtn
          name="Register"
          // style={{ backgroundColor: validation ? "#348593" : "" }}
          style={{ width: "50%", backgroundColor: validation ? "#000" : "" }}
          //  disabled={validation?false:true}
          onClick={Submit}
        />
      </form>
    </AuthUi>
  );
}

export default Register;
