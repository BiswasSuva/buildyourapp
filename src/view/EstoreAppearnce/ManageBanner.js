import React, { useEffect, useState } from "react";

import { deleteEcomBanner, ecomBanner } from "../../api/appApi";
import EstoreAddBanner from "./EstoreAddBanner";
import { motion } from "framer-motion";
import { useEstoreRightSidearContext } from "../../Providers/EcomRightSidebar";
import Datatable from "../../Component/Datatable/Datatable";

function ManageBanner({ setFetch, close, editId }) {
  const [data, setData] = useState([]);
  const [editEnable, setEditEnable] = useState(false);
  const [editData, setEditData] = useState(null);
  const { component, setRenderComponent } = useEstoreRightSidearContext();

  useEffect(() => {
    fetchBanner();
  }, [editEnable]);

  const fetchBanner = async () => {
    let result = await ecomBanner();
    console.log("banner", result);
    if (result && result.status) {
      let arr = result.data.map((item, i) => {
        return {
          sl: i + 1,
          name: item.title,
          image: <img src={item.image} height={100} width={100} />,
          description: item.description,
          action: (
            <div className="d-flex align-items-center justify-content-between">
              <button
                class="editbtns"
                onClick={() => {
                  setRenderComponent(
                    <EstoreAddBanner
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
      name: "Banner name",
      selector: "name",
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
    let result = await deleteEcomBanner(id);
    if (result && result.status) {
      fetchBanner();
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
      <Datatable columns={columns} rows={data} />
      <button
        id="input_14"
        type="submit"
        className="form-submit-button submit-button jf-form-buttons jsTest-submitField conditionallyDisabled"
        data-component="button"
        data-content=""
        disabled=""
      >
        Submit
      </button>
    </motion.div>
  );
}

export default ManageBanner;
