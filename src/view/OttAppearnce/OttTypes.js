import React, { useEffect, useState } from "react";
import { deleteEcomCat, deleteOttTypes, getEcomCat, getOttTypes } from "../../api/appApi";
import { motion } from "framer-motion";
import Datatable from "../../Component/Datatable/Datatable";
// import { useEstoreRightSidearContext } from "../../Providers/EcomRightSidebar";

import AddOttTypes from "./AddOttTypes";
import { useOttRightSidearContext } from "../../Providers/OttRightSidebar";
import Heading from "../../Component/RenderComponent/Heading";

function OttTypes({ setFetch, onEdit }) {
  const [data, setData] = useState([]);
  const { component, setRenderComponent } = useOttRightSidearContext();

  useEffect(() => {
    fetchOttTypes();
  }, []);

  const fetchOttTypes = async () => {
    let result = await getOttTypes();
    console.log(result);
    if (result && result.status) {
      let arr = result.data.map((item, i) => {
        return {
          sl: i + 1,
          name: item.name,
          haveEpisodes:item.haveEpisodes?"Yes":"No",
          description: item.description,
          action: (
            <div className="d-flex align-items-center justify-content-between">
              <button
                className="editbtns"
                onClick={() => {
                  setRenderComponent(
                    <AddOttTypes
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
      name: "Have Episodes",
      selector: "haveEpisodes",
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
    let result = await deleteOttTypes(id);
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
      <Heading heading="Ott-Types"/>
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

export default OttTypes;
