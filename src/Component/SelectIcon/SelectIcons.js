import React, { Fragment, useEffect, useMemo, useState } from "react";
import { Allicons } from "../../AllIcons/Allicons";
import Icon from "../../AllIcons/Icon";

function SelectIcons({ onClick,value="" }) {
  const [search, SetSearch] = useState("");
  const [listShow,setListShow] = useState(false)

  useEffect(()=>{
    SetSearch(value)
  },[value])

  return (
    <Fragment >
      <div >
      <input
        type="text"
        className="form-control"
        placeholder="Set Text Here..."
        value={search}
        onChange={(val) => {
          SetSearch(val.target.value);
         
        }}
        onFocus={()=>setListShow(true)}
       
      />
     {listShow&& <div className="main_icon_wrap">
        {Allicons.map((item, index) => {
          return (
            <div className="icon_box" key={index}>
              {} <h3>{item.family}</h3>
              <div className="icon_row">
                {Object.entries(item.Icons).map((icon, i) => {
                  if (icon[0].includes(search)) {
                    return (
                      <Icon
                        style={{ cursor: "pointer" }}
                        key={i}
                        family={item.family}
                        name={icon[0]}
                        size="35px"
                        color="#fff"
                        onClick={(e) =>{
                          // e.stopPropagation()
                          onClick({ family: item.family, name: icon[0] })
                          setListShow(false)
                        }
                          
                         
                        }
                      />
                    );
                  }
                })}
              </div>
            </div>
          );
        })}
      </div>}
      </div>
     
    </Fragment>
  );
}

export default SelectIcons;
