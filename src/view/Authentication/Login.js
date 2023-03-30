import React, { useState, useMemo } from "react";
import AuthUi from "../../Component/AuthCard/AuthUi";
import AuthInputBox from "../../Component/AuthCard/AuthInputBox";
import AuthBtn from "../../Component/AuthCard/AuthBtn";
import { getLogin } from "../../api/authapi";
import { reactLocalStorage } from "reactjs-localstorage";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Eva from "../EvaAi/Eva";
import { fetchuser } from "../../redux/reducers/User";
import { toast } from "react-hot-toast";
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loading, setLoading] = useState(false);

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
    // setLoading(true)
    e.preventDefault();
    if (validation) {
      let data = {
        email,
        password,
      };
      let result = await getLogin(data);
      console.log(result);
      if (result && result.status) {
        setLoading(true);
        reactLocalStorage.set("loginStatus", true);
        reactLocalStorage.set("token", result.data.token);
        // reactLocalStorage.set("tutorial",true)

        // navigate("/welcome")
        setTimeout(() => {
          dispatch(fetchuser());

          navigate("/");
        }, 10000);
      } else {
        toast.error(result.message, {
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        });
      }
    } else {
      emailChecking();
      passwordChecking();
    }
    // setLoading(false)
  };
  if (loading) {
    return <Eva />;
  } else {
    return (
      <AuthUi>

        <form style={{ position: "relative", zIndex: 10 }} className="form">
          <h1>Login to your Account</h1>

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
            name="Login"
            // style={{ width: "50%", backgroundColor: validation ? "#348593" : "" }}
            style={{ width: "40%", backgroundColor: validation ? "rgb(63 61 86)" : "" }}
            // disabled={loading}
            onClick={Submit}
          />
        </form>
      </AuthUi>
    );
  }
}

export default Login;
