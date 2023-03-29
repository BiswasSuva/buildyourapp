import React, { useEffect, useState } from "react";
import { deleteEcomCat, getEcomCat } from "../../api/appApi";
import { motion } from "framer-motion";
import Datatable from "../../Component/Datatable/Datatable";
import { useEstoreRightSidearContext } from "../../Providers/EcomRightSidebar";
import CategoryAddModal from "./CategoryAddModal";

function ManageCategory({ setFetch, onEdit }) {
  const [data, setData] = useState([]);
  const { component, setRenderComponent } = useEstoreRightSidearContext();

  useEffect(() => {
    fetchCategory();
  }, []);

  const fetchCategory = async () => {
    let result = await getEcomCat();
    if (result && result.status) {
      let arr = result.data.map((item, i) => {
        return {
          sl: i + 1,
          name: item.name,
          image: <img src={item.image} height={100} width={100} />,
          description: item.description,
          action: (
            <div className="d-flex align-items-center justify-content-between">
              <button
                className="editbtns"
                onClick={() => {
                  setRenderComponent(
                    <CategoryAddModal
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
                {/* <i class="fa-regular fa-trash-can"></i> */}
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
      name: "Category name",
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
    let result = await deleteEcomCat(id);
    if (result && result.status) {
      fetchCategory();
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

export default ManageCategory;
