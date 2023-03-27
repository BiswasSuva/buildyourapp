import React, { useEffect, useState } from "react";
import { addOttTypes, editOttTypes, uploadImage } from "../../api/appApi";
import { motion } from "framer-motion";
import Heading from "../../Component/RenderComponent/Heading";
import TextBox from "../../Component/RenderComponent/TextBox";
import TextArea from "../../Component/RenderComponent/TextArea";
import SubmitButton from "../../Component/RenderComponent/SubmitButton";
import { useOttRightSidearContext } from "../../Providers/OttRightSidebar";
import SelectDropDown from "../../Component/RenderComponent/SelectDropDown";
import OttTypes from "./OttTypes";

function AddOttTypes({ setFetch, editEnable = false, editElement = null }) {
  const [name, setName] = useState("");
  const [haveEpisodes, setHaveEpisodes] = useState(false);
  const [description, setdescription] = useState("");
  const { setRenderComponent } = useOttRightSidearContext();



  const submit = async (e) => {
    e.preventDefault();

    if (name.trim() != "" && description.trim() != "" ) {
      let dataSend = {
        name,
        description,
        haveEpisodes,
      };
      let result;
      if (!editEnable) {
        result = await addOttTypes(dataSend);
      } else {
        result = await editOttTypes(editElement?._id, dataSend);
      }
      if (result && result.status) {
        setFetch((prev) => !prev);
        setRenderComponent(<OttTypes setFetch={setFetch} />);
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
      setHaveEpisodes(editElement?.haveEpisodes);
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
        <Heading heading="Add Ott-Types" />
        <ul
          className="form-section page-section"
          style={{ height: "600px", overflowY: "auto" }}
        >
          <TextBox
            title="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <TextArea
            title="Description"
            value={description}
            onChange={(e) => setdescription(e.target.value)}
          />
          <SelectDropDown
          title="Have Episodes?"
          data={[{label:"Yes",value:true},{label:"No",value:false}]}
          showingKey="label"
          valueKey="value"
          value={haveEpisodes}
          onChange={(val)=>setHaveEpisodes(val)}
          />

          <SubmitButton
            title={editEnable ? "Update" : "Submit"}
            onClick={submit}
          />
        </ul>
      </div>
    </motion.div>
  );
}

export default AddOttTypes;
