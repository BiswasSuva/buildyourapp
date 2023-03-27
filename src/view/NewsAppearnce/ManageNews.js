import React, { useEffect, useState } from "react";
import {  deleteNews, getNews, } from "../../api/appApi";
import { motion } from "framer-motion";
import Datatable from "../../Component/Datatable/Datatable";
import { useNewsRightSidearContext } from "../../Providers/NewsRightSidebar";
import Heading from "../../Component/RenderComponent/Heading";
import AddNews from "./AddNews";

function ManageNews({ setFetch, onEdit }) {
  const [data, setData] = useState([]);
  const { component, setRenderComponent } = useNewsRightSidearContext();

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    let result = await getNews(1);
    console.log("fetchnew",result);
    // return false
    if (result && result.status) {
      let arr = result.data.map((item, i) => {
        return {
          sl: i + 1,
          name: item.title,
          image: <img src={item.image??""} height={100} width={100} />,
          description: item.description, 
          action: (
            <div className="d-flex align-items-center justify-content-between">
              <button
                class="editbtns"
                onClick={() => {
                  setRenderComponent(
                    <AddNews
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
      name: "Name",
      selector: "name",
      sortable: true,
    },
    {
      name: "Image",
      selector: "image",
      sortable: true,
    },
    {
        name: "Description",
        selector: "description",
        sortable: true,
      },
   
 
    {
      name: "Action",
      selector: "action",
    },
  ];

  const deleteHandle = async (id) => {
    let result = await deleteNews(id);
    if (result && result.status) {
        fetchNews();
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
      <Heading heading="News "/>
      <Datatable columns={columns} rows={data} />
      {/* <button
        id="input_14"
        type="submit"
        className="form-submit-button submit-button jf-form-buttons jsTest-submitField conditionallyDisabled"
        data-component="button"
        data-content=""
        disabled=""
      >
        Submit
      </button> */}
    </motion.div>
  );
}

export default ManageNews;
