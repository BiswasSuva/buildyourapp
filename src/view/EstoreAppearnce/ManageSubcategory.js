import React, { useEffect, useState } from "react";
import bitbucketnew from "../../images/bitbucketnew.svg";
import bitbucket from "../../images/bitbucket.svg";
import DataTable from "react-data-table-component";
import { deleteEcomSubCat, getEcomCat, getEcomSubCat } from "../../api/appApi";
import useEcomCategory from "../../customHooks/useEcomCategory";
import AddSubCategory from "./AddSubCategory";
import { motion } from "framer-motion";
import Datatable from "../../Component/Datatable/Datatable";
import { useEstoreRightSidearContext } from "../../Providers/EcomRightSidebar";

function ManageSubcategory({setFetch }) {
  const [data, setData] = useState([]);
  const [editEnable, setEditEnable] = useState(false);
  const category = useEcomCategory({ refetch: false });
  const { component, setRenderComponent } = useEstoreRightSidearContext();

  useEffect(() => {
    fetchCategory();
  }, []);

  const fetchCategory = async () => {
    let result = await getEcomSubCat();
    console.log(result);
    if (result && result.status) {
      let arr = result.data.map((item, i) => {
        return {
          sl: i + 1,
          category: category.find((a) => a._id == item.categoryID)?.name,
          name: item.name,
          image: <img src={item.image} height={100} width={100} />,
          description: item.description,
          action: (
            <div className="d-flex align-items-center justify-content-between">
            <button
              class="editbtns"
              onClick={() => {
                setRenderComponent(
                  <AddSubCategory
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
      name: "Action",
      selector: "action",
    },
  ];

  const deleteHandle = async (id) => {
    let result = await deleteEcomSubCat(id);
    if (result && result.status) {
      fetchCategory();
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

export default ManageSubcategory;
