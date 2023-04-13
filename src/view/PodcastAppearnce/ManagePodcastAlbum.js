import React, { useEffect, useState } from "react";
import { deleteOttVideo, DelPodcastAlbum, getOttVideos, GetPodcastAlbum } from "../../api/appApi";
import Datatable from "../../Component/Datatable/Datatable";
import Heading from "../../Component/RenderComponent/Heading";
import { motion } from "framer-motion";

import { usePodcastRightSidebarContext } from "../../Providers/PodcastRightSidebar";
import AddPodCast from "./AddPodcast";
import AddPodcastAlbum from "./PodcastAlbum/AddPodcastAlbum";

const ManagePodcastAlbum = () => {
  const { component, setRenderComponent } = usePodcastRightSidebarContext();
  const [allVid, setAllVid] = useState([]);
  useEffect(() => {
    getpodcast();
  }, []);
  const getpodcast = async () => {
    let res = await GetPodcastAlbum();
    console.log(res,"Album");
    if (res && res.status) {
      let arr = res.data.map((item, ind) => {
        return {
          ...item,
          name:item.PodcastData[0]?.name,
          // season:item.season,
          sl: ind + 1,
          edit: (
            <i
              onClick={() => {
                setRenderComponent(
                  <AddPodcastAlbum
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
    let res = await DelPodcastAlbum(id);
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
      name: "Season",
      selector: "season",
      sortable: true,
    },
    {
      name: "Song Number",
      selector: "songNumber",
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
      <Heading heading="Podcasts Albums" />
      <Datatable columns={columns} rows={allVid} />
    </motion.div>
  );
};

export default ManagePodcastAlbum;
