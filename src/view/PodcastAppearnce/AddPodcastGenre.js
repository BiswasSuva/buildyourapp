import React, { useEffect, useState } from "react";
import {
  addOttGenre,
  AddPodcastGenreApi,
  editOttGenre,
  EditPodcastGenre,
} from "../../api/appApi";
import { motion } from "framer-motion";
import Heading from "../../Component/RenderComponent/Heading";
import TextBox from "../../Component/RenderComponent/TextBox";
import TextArea from "../../Component/RenderComponent/TextArea";
import SubmitButton from "../../Component/RenderComponent/SubmitButton";
import { usePodcastRightSidebarContext } from "../../Providers/PodcastRightSidebar";
import SelectDropDown from "../../Component/RenderComponent/SelectDropDown";
import PodcastGenre from "./PodcastGenre";
import { toast } from "react-hot-toast";

function AddPodcastGenre({ setFetch, editEnable = false, editElement = null }) {
  const [name, setName] = useState("");
  const [description, setdescription] = useState("");
  const { setRenderComponent } = usePodcastRightSidebarContext();

  const submit = async (e) => {
    e.preventDefault();

    if (name.trim() != "") {
      let dataSend = {
        name,
        description,
      };
      let result;
      if (!editEnable) {
        result = await AddPodcastGenreApi(dataSend);
      } else {
        result = await EditPodcastGenre(editElement?._id, dataSend);
      }
      if (result && result.status) {
        toast.success(result?.message);
        setFetch((prev) => !prev);
        setRenderComponent(<PodcastGenre setFetch={setFetch} />);
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
        <Heading heading={editEnable?"Update Podcast-Genre": "Add Podcast-Genre"} />
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

          <SubmitButton
            title={editEnable ? "Update" : "Submit"}
            onClick={submit}
          />
        </ul>
      </div>
    </motion.div>
  );
}

export default AddPodcastGenre;
