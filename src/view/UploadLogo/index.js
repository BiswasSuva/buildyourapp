import React, { useEffect, useState } from "react";
import DashboardUi from "../../Component/DasboardUi/DashboardUi";
import Mainmobile from "../Dashboard/Mainmobile";
import "./Uploadlogo.css";
import UploadLogo from "./UploadLogo";
import {  createScreen, uploadImage } from "../../api/appApi";
import LogoImage from "./LogoImage";
import LogoAction from "./LogoAction";
import VerticalSpin from "../../Component/Loaders/VerticalSpin";
import { useNavigate } from "react-router";
import useScreen from "../../customHooks/useScreen";
function Index() {
  const navigate = useNavigate()
  const screen = useScreen()
  const [logo, setLogo] = useState("");

  const [loading, setLoading] = useState(false);
  console.log("scc",logo);

  const imageHandle = async (file) => {
    // setLoading(true);
    console.log(file);
    let data = new FormData();
    data.append("image", file);
    let result = await uploadImage(data);
    console.log("im", result);
    if (result && result.status) {
      setLogo(result.image.url);
    }
    setLoading(false);
  };
  const submit =async ()=>{
    let data = {
      logo_img:logo
    }
    let result = await createScreen(data)
    if(result&&result.status){
      navigate("/color-scheme")
    }
  }

  useEffect(()=>{
setLogo(screen.logo_img?screen.logo_img:"")
  },[screen]
  )

  return (
    <DashboardUi>
      <div className="col-lg-12 col-xl-12 col-md-12 col-12">
        <Mainmobile>
          {loading ? (
          <div>  <VerticalSpin /></div>
          ) : (
            <>
              {!logo ? (
                <UploadLogo
                  onChange={(e) => {
                    imageHandle(e.target.files[0]);
                  }}
                />
              ) : (
                <LogoImage src={logo} />
              )}
              {logo != "" && <LogoAction onBack={() => setLogo("")} onConfirm={submit} />}
            </>
          )}
        </Mainmobile>
      </div>
    </DashboardUi>
  );
}

export default Index;
