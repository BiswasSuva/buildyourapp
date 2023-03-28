import React, {useEffect} from 'react'
import $ from "jquery";
function AuthInputBox({ label = "label", type = "text", placeholder = "placeholder", value = "", onChange, style = {}, onClick }) {


  useEffect(() => {
    $('input').focus(function () {
      $(this).parents('.form-group').addClass('focused');
    });

    $('input').blur(function () {
      var inputValue = $(this).val();
      if (inputValue == "") {
        $(this).removeClass('filled');
        $(this).parents('.form-group').removeClass('focused');
      } else {
        $(this).addClass('filled');
      }
    })
  }, []);

  return (
    <>

      <div className="form-group inputgrp" style={style}>
        {/* <div className='field'> */}
       
        <i className="fa-solid fa-user"></i>
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e)}
          className="form-control inputplace"
          //   id="formGroupExampleInput"
          // placeholder={placeholder}
          onClick={onClick}
          
        />
         <label className="placeholder">{label}</label>
        {/* </div> */}
      </div>

    </>

  )
}

export default AuthInputBox