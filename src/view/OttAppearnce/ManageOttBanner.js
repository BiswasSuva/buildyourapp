import React, { useEffect, useState } from "react";
import {  deleteOttGenre, getOttBanner, getOttGenre, } from "../../api/appApi";
import { motion } from "framer-motion";
import Datatable from "../../Component/Datatable/Datatable";
import { useOttRightSidearContext } from "../../Providers/OttRightSidebar";
import AddOttGenre from "./AddOttGenre";
import Heading from "../../Component/RenderComponent/Heading";
import AddOttBanner from "./AddOttBanner";

function ManageOttBanner({ setFetch, onEdit }) {
  const [data, setData] = useState([]);
  const { component, setRenderComponent } = useOttRightSidearContext();

  useEffect(() => {
    fetchOttTypes();
  }, []);

  const fetchOttTypes = async () => {
    let result = await getOttBanner();
    console.log(result);
    if (result && result.status) {
      let arr = result.data.map((item, i) => {
        return {
          sl: i + 1,
          image:<img src={ item.image} style={{height:"100px",width:"100px"}}/>,
        //   image: <img src={item.image} height={100} width={100} />,
          // description: item.description??"",
          action: (
            <div className="d-flex align-items-center justify-content-between">
              <button
                class="editbtns"
                onClick={() => {
                  setRenderComponent(
                    <AddOttBanner
                      setFetch={setFetch}
                      editElement={item}
                      editEnable={true}
                    />
                  );
                }}
              >
                <i class="fa-solid fa-pen-to-square"></i>
              </button>
              <button class="deletebtns" onClick={() => deleteHandle(item._id)}>
                <i class="fa-solid fa-delete-left"></i>
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
      name: "Image",
      selector: "image",
      sortable: true,
    },
    
   
 
    {
      name: "Action",
      selector: "action",
    },
  ];

  const deleteHandle = async (id) => {
    let result = await deleteOttGenre(id);
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
      <Heading heading="Ott Banner"/>
      <Datatable columns={columns} rows={data} />
     
    </motion.div>
  );
}

export default ManageOttBanner;
