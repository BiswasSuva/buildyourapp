import React, { useEffect } from "react";
import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";
import feelsimage from "../../images/feelsimage.png";
function Datatable({ columns = [], rows = [] }) {
  console.log("coloumns", columns);

  useEffect(() => {
    setTimeout(function () {
      $("#sidedatatable").DataTable();
    }, 1000);
  }, []);

  const createTableData = (data) => {
    let arr = [];
    for (const coloumn of columns) {
      console.log(coloumn.selector);
      if (data[coloumn.selector]) {
        arr.push(data[coloumn.selector]);
      }
    }
    return arr
  };

  return (
    <div class=" mytable" style={{width: "100%" }}>
      <table
        id="sidedatatable"
        className="table  table-bordered table-responsive"
        style={{ width: "100%", color: "#fff" }}
      >
        <thead>
          <tr>
            {columns.map((item, i) => {
              return <th>{item.name}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {rows.map((item, i) => {
            return (
              <tr>
                {createTableData(item)?.map((item,index)=>{
                    return <td>
                        {item}
                    </td>
                })}
                {/* <td></td>
                <td>
                  <img src={feelsimage} alt="" className="img-fluid" />
                </td>
                <td>fdijkfdjfd fdjhkfdhfd fdhjfdhfd fdhjfdhfd fdjhkfdhjfd </td>
                <td>
                  <div className="d-flex align-items-center justify-content-between">
                    <button class="editbtns">
                      <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                    <button class="deletebtns">
                      <i class="fa-solid fa-delete-left"></i>
                    </button>
                  </div>
                </td> */}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Datatable;
