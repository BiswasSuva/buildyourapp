import React, { useEffect, useState } from "react";
import { addOttBanner, addOttGenre, editOttBanner, editOttGenre, uploadOttThumbImage } from "../../api/appApi";
import { motion } from "framer-motion";
import Heading from "../../Component/RenderComponent/Heading";
import TextBox from "../../Component/RenderComponent/TextBox";
import TextArea from "../../Component/RenderComponent/TextArea";
import SubmitButton from "../../Component/RenderComponent/SubmitButton";
import { useOttRightSidearContext } from "../../Providers/OttRightSidebar";
import SelectDropDown from "../../Component/RenderComponent/SelectDropDown";
import OttGenre from "./OttGenre";
import DropFile from "../../Component/RenderComponent/DropFile";
import ManageOttBanner from "./ManageOttBanner";

function AddOttBanner({ setFetch, editEnable = false, editElement = null }) {
  const [name, setName] = useState("");
  const [image,setImage] = useState("")
  const { setRenderComponent } = useOttRightSidearContext();

const uploadImage =async (file)=>{
    let data = new FormData()
    data.append("image",file)
    let result = await uploadOttThumbImage(data)
    if(result && result.status){
        setImage(result.url)
    }


}

  const submit = async (e) => {
    e.preventDefault();

    if (image.trim() !="") {
      let dataSend = {
        title:name,
        image:image
        // description,
      };
      let result;
      if (!editEnable) {
        result = await addOttBanner(dataSend);
      } else {
        result = await editOttBanner(editElement?._id, dataSend);
      }
      if (result && result.status) {
        setFetch((prev) => !prev);
        setRenderComponent(<ManageOttBanner setFetch={setFetch} />);
      } else {
        alert("server error");
      }
    } else {
      alert("All feilds are required");
    }
  };
  useEffect(() => {
    if (editEnable) {
      setName(editElement?.name);
      setImage(editElement?.image)
    }
  }, [editElement]);
  return (
    <motion.div
      animate={{ x: [400, -5, 0] }}
      transition={{ ease: "easeOut", duration: 1 }}
      // initial={false}

      id="right-sidebar hide-scrollbar"
      className="right-sidebar"
      style={{ paddingBottom: "50px" }}
    >
      <div role="main" className="form-all">
        <Heading heading="Add Ott-Banners" />
        <ul
          className="form-section page-section"
          style={{ height: "600px", overflowY: "auto" }}
        >
          {/* <TextBox
            title="Title"
            value={name}
            onChange={(e) => setName(e.target.value)}
          /> */}

         <DropFile title="Add Banner Image" onChange={(e)=>uploadImage(e.target.files[0])} />
         {image !="" && <img src={image} style={{height:"100px",width:'100px'}}/>}
         

          <SubmitButton
            title={editEnable ? "Update" : "Submit"}
            onClick={submit}
          />
        </ul>
      </div>
    </motion.div>
  );
}

export default AddOttBanner;
