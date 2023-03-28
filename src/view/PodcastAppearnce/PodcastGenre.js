import React, { useEffect, useState } from "react";
import {
  deleteOttGenre,
  deletePodcastGenre,
  getOttGenre,
  GetPodcastGenre,
} from "../../api/appApi";
import { motion } from "framer-motion";
import Datatable from "../../Component/Datatable/Datatable";
import { usePodcastRightSidebarContext } from "../../Providers/PodcastRightSidebar";
import Heading from "../../Component/RenderComponent/Heading";
import AddPodcastGenre from "./AddPodcastGenre";

function PodcastGenre({ setFetch, onEdit }) {
  const [data, setData] = useState([]);
  const { component, setRenderComponent } = usePodcastRightSidebarContext();

  useEffect(() => {
    fetchOttTypes();
  }, []);

  const fetchOttTypes = async () => {
    let result = await GetPodcastGenre();
    console.log(result);
    if (result && result.status) {
      let arr = result.data.map((item, i) => {
        return {
          sl: i + 1,
          name: item.name,
          //   image: <img src={item.image} height={100} width={100} />,
          // description: item.description??"",
          action: (
            <div className="d-flex align-items-center justify-content-between">
              <button
                className="editbtns"
                onClick={() => {
                  setRenderComponent(
                    <AddPodcastGenre
                      setFetch={setFetch}
                      editElement={item}
                      editEnable={true}
                    />
                  );
                }}
              >
                <i className="fa-solid fa-pen-to-square"></i>
              </button>
              <button className="deletebtns" onClick={() => deleteHandle(item._id)}>
                <i className="fa-solid fa-delete-left"></i>
              </button>
            </div>
          ),
        };
      });
      setData(arr);
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
      name: "Action",
      selector: "action",
    },
  ];

  const deleteHandle = async (id) => {
    let con = window.confirm("Are You Sure Want To Delete?");
    if (!con) {
      return;
    }
    let result = await deletePodcastGenre(id);
    if (result && result.status) {
      fetchOttTypes();
      setFetch((prev) => !prev);
    }
  };

  return (
    <motion.div
      animate={{ x: [400, -5, 0] }}
      transition={{ ease: "easeOut", duration: 1 }}
      // initial={false}

      id="right-sidebar hide-scrollbar"
      className="right-sidebar"
      style={{ paddingBottom: "50px" }}
    >
      <Heading heading="Podcast Genre" />
      <Datatable columns={columns} rows={data} />
    </motion.div>
  );
}

export default PodcastGenre;
