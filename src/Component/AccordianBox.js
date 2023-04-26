import React from "react";

function AccordianBox({ title = "Title", children,onClick}) {
  return (
    <div className="each-accordionbox">
      <h3 className="each-title">{title}</h3>
      <span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
      <div className="swipebox" onClick={onClick}>
        <div className="swipeplus">+</div>
      </div>
      <ul className="each-text custom-list" >
        {children}
        {/* {list.map((item) => {
          return (
            <li
              onClick={() =>
                setRenderComponent(
                  <AddOttVideo setFetch={setFetch} close={() => {}} />
                )
              }
            >
              Add video
            </li>
          );
        })}{" "}
        <li
          onClick={() =>
            setRenderComponent(
              <AddOttVideo setFetch={setFetch} close={() => {}} />
            )
          }
        >
          Add video
        </li> */}
        {/* <li
        onClick={() =>
          setRenderComponent(<ManageVideo setFetch={setFetch} />)
        }
      >
        Manage Videos
      </li> */}
      </ul>
    </div>
  );
}

export default AccordianBox;
