import React, { useEffect, useState } from "react";
import { deleteOttVideo, DelPodcast, getOttVideos, GetPodcast } from "../../api/appApi";
import Datatable from "../../Component/Datatable/Datatable";
import Heading from "../../Component/RenderComponent/Heading";
import { motion } from "framer-motion";

import { usePodcastRightSidebarContext } from "../../Providers/PodcastRightSidebar";
import AddPodCast from "./AddPodcast";

const ManagePodcast = () => {
  const { component, setRenderComponent } = usePodcastRightSidebarContext();
  const [allVid, setAllVid] = useState([]);
  useEffect(() => {
    getpodcast();
  }, []);
  const getpodcast = async () => {
    let res = await GetPodcast();
    if (res && res.status) {
      let arr = res.data.map((item, ind) => {
        return {
          ...item,
          sl: ind + 1,
          edit: (
            <i
              onClick={() => {
                setRenderComponent(
                  <AddPodCast
                    // setFetch={setFetch}
                    editElement={item}
                    editEnable={true}
                  />
                );
              }}
              style={{ color: "green", cursor: "pointer" }}
              className="fa-solid fa-pen-to-square"
            ></i>
          ),
          del: (
            <i
              onClick={() => handleDel(item._id)}
              style={{ color: "red", cursor: "pointer" }}
              className="fa-solid fa-delete-left"
            ></i>
          ),
        };
      });
      setAllVid(arr);
    }
  };
  const handleDel = async (id) => {
    let con = window.confirm("Are You Sure?");
    if (!con) {
      return;
    }
    let res = await DelPodcast(id);
    if (res && res.status) {
      getpodcast();
      alert("Delted Successfully");
    }
  };
  const columns = [
    {
      name: "Sl",
      selector: "sl",
      sortable: true,
    },
    {
      name: "Name",
      selector: "name",
      sortable: true,
    },
    {
      name: "Edit",
      selector: "edit",
      sortable: true,
    },
    {
      name: "Delete",
      selector: "del",
      sortable: true,
    },
  ];

  return (
    <motion.div
      animate={{ x: [400, -5, 0] }}
      transition={{ ease: "easeOut", duration: 1 }}
      // initial={false}

      id="right-sidebar hide-scrollbar"
      className="right-sidebar"
      style={{ paddingBottom: "50px" }}
    >
      <Heading heading="Podcasts" />
      <Datatable columns={columns} rows={allVid} />
    </motion.div>
  );
};

export default ManagePodcast;
