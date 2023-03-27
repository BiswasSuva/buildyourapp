import React, { Fragment, useEffect, useMemo, useState } from "react";
import { allFontsFamily } from "../../Module/AllFontsFamily";

function SearchableDropDown({ onClick, value = "" }) {
  const [text, setText] = useState("");
  const [listShow, setListShow] = useState(false);
  const fonts = useMemo(() => {
    return allFontsFamily.filter((item) => item.includes(text));
  }, [text]);

  useEffect(() => {
    console.log("default",value);
    setText(value);
  }, [value]);
  return (
    <Fragment >]
      <div  >
      <input
        type="text"
        className="form-control"
        placeholder="Set Text Here..."
        value={text}
        onChange={(val) => setText(val.target.value)}
        onFocus={() => {
          setListShow(true);
        }}
        
      />
      {listShow && (
        <div
          style={{
            height: "auto",
            maxHeight:"200px",
            padding: "10px",
            margin: "5px",
            overflow: "scroll",
          }}
         
        >
          {fonts.map((item, index) => {
            return (
              <li
                onClick={() => onClick(item)}
                key={index}
                style={{ color: "#fff",cursor:"pointer",fontSize:"13px" ,lineHeight:"2rem"}}
                
              >
                {item}
              </li>
            );
          })}
        </div>
      )}
      </div>
    
    </Fragment>
  );
}

export default SearchableDropDown;
