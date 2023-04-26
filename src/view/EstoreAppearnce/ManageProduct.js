import React, { useEffect, useState } from "react";

import { deleteEcomProduct, getEcomProduct } from "../../api/appApi";
import useEcomCategory from "../../customHooks/useEcomCategory";
import AddProduct from "./AddProduct";
import { motion } from "framer-motion";
import Datatable from "../../Component/Datatable/Datatable";
import { useEstoreRightSidearContext } from "../../Providers/EcomRightSidebar";
import { useElementList } from "../../Providers/ElemetProvider";
function ManageProduct({ setFetch, close }) {
  const [data, setData] = useState([]);
  const [editEnable, setEditEnable] = useState(false);
  const [editData, setEditData] = useState(null);
  const category = useEcomCategory();
  const { component, setRenderComponent } = useEstoreRightSidearContext();
  const {rerender,setRender} = useElementList()

  useEffect(() => {
    fetchProduct();
  }, [editEnable]);

  const fetchProduct = async () => {
    let result = await getEcomProduct();
    console.log(result);
    if (result && result.status) {
      let arr = result.data.map((item, i) => {
        return {
          sl: i + 1,
          category: category.find((a) => a._id == item.categoryID)?.name,
          name: item.productName,
          image: <img src={item.image} height={100} width={100} />,
          description: item.description,
          action: (
            <div className="d-flex align-items-center justify-content-between">
              <button
                className="editbtns"
                onClick={() => {
                  setRenderComponent(
                    <AddProduct
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
    let result = await deleteEcomProduct(id);
    if (result && result.status) {
      fetchProduct();

      setRender(!rerender);

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

export default ManageProduct;
