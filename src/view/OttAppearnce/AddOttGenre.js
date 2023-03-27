import React, { useEffect, useState } from "react";
import { addOttGenre, editOttGenre } from "../../api/appApi";
import { motion } from "framer-motion";
import Heading from "../../Component/RenderComponent/Heading";
import TextBox from "../../Component/RenderComponent/TextBox";
import TextArea from "../../Component/RenderComponent/TextArea";
import SubmitButton from "../../Component/RenderComponent/SubmitButton";
import { useOttRightSidearContext } from "../../Providers/OttRightSidebar";
import SelectDropDown from "../../Component/RenderComponent/SelectDropDown";
import OttGenre from "./OttGenre";

function AddOttGenre({ setFetch, editEnable = false, editElement = null }) {
  const [name, setName] = useState("");
  const [description, setdescription] = useState("");
  const { setRenderComponent } = useOttRightSidearContext();



  const submit = async (e) => {
    e.preventDefault();

    if (name.trim() != "" ) {
      let dataSend = {
        name,
        // description,
      };
      let result;
      if (!editEnable) {
        result = await addOttGenre(dataSend);
      } else {
        result = await editOttGenre(editElement?._id, dataSend);
      }
      if (result && result.status) {
        setFetch((prev) => !prev);
        setRenderComponent(<OttGenre setFetch={setFetch} />);
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
      setdescription(editElement?.description);
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
        <Heading heading="Add Ott-Genre" />
        <ul
          className="form-section page-section"
          style={{ height: "600px", overflowY: "auto" }}
        >
          <TextBox
            title="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          {/* <TextArea
            title="Description"
            value={description}
            onChange={(e) => setdescription(e.target.value)}
          /> */}
         

          <SubmitButton
            title={editEnable ? "Update" : "Submit"}
            onClick={submit}
          />
        </ul>
      </div>
    </motion.div>
  );
}

export default AddOttGenre;
