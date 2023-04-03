import React, { useEffect, useState } from "react";
import {
  addOttTypes,
  AddPodcastType,
  editOttTypes,
  EditPodcastType,
  uploadImage,
} from "../../api/appApi";
import { motion } from "framer-motion";
import Heading from "../../Component/RenderComponent/Heading";
import TextBox from "../../Component/RenderComponent/TextBox";
import TextArea from "../../Component/RenderComponent/TextArea";
import SubmitButton from "../../Component/RenderComponent/SubmitButton";
import { usePodcastRightSidebarContext } from "../../Providers/PodcastRightSidebar";
import SelectDropDown from "../../Component/RenderComponent/SelectDropDown";
import ManagePodcastType from "./ManagePodcastType";
import { toast } from "react-hot-toast";
// import OttTypes from "./OttTypes";

function PodcastTypes({ setFetch, editEnable = false, editElement = null }) {
  const [name, setName] = useState("");
  const [haveEpisodes, setHaveEpisodes] = useState(false);
  const [description, setdescription] = useState("");
  const { setRenderComponent } = usePodcastRightSidebarContext();

  const submit = async (e) => {
    e.preventDefault();

    if (name.trim() != "" && description.trim() != "") {
      let dataSend = {
        name,
        description,
        haveEpisodes,
      };
      let result;
      if (!editEnable) {
        result = await AddPodcastType(dataSend);
      } else {
        result = await EditPodcastType(editElement?._id, dataSend);
      }
      console.log(result);
      if (result && result.status) {
        toast.success(result?.message);
        setFetch((prev) => !prev);
        setRenderComponent(<ManagePodcastType setFetch={setFetch} />);
      } else {
        toast.error("server error");
      }
    } else {
      toast.error("All feilds are required");
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
        <Heading heading={editEnable?"Update Podcast-Types": "Add Podcast-Types"} />
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
            data={[
              { label: "Yes", value: true },
              { label: "No", value: false },
            ]}
            showingKey="label"
            valueKey="value"
            value={haveEpisodes}
            onChange={(val) => setHaveEpisodes(val)}
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

export default PodcastTypes;
