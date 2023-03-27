import React from 'react'
import { motion, Variants } from "framer-motion";
import style from "./Formmodal.module.css"
import uploadicon from "../../images/uploadicon.png";
import FormButton from '../Buttons/FormButton';


function FormModals({ setFetch, close, editEnable = false, editElement = null }) {

    return (
        <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mainModal">

            <motion.div
                animate={{ x: [-200, 0] }}
                transition={{ type: "spring", stiffness: 100 }}
                // whileHover={{ scale: [null, 1.3, 1.2] }}
                className={style.formModal}

                style={{ background: "#000", height: "450px", overflowY: "auto" }}
            >
                {/* <img onClick={close} className={style.cross} src="https://img.icons8.com/ios11/600/000000/macos-close.png" /> */}

                <div className={style.closecontainer} onClick={close}>
                    <div className={style.leftright} />
                    <div className={style.rightleft} />
                </div>

                <motion.h5
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className={style.formModalHeader}>
                    Add Categories
                </motion.h5>



                <form style={{textAlign: "center"}}>
                    {/* <label className={style.formLabel}>Category Name</label> */}
                    <input
                        className={style.formInput}
                        type="text"
                        placeholder="Category Name"
                        id="name"
                    // value={name}
                    // onChange={(val) => setName(val.target.value)}
                    />
                    {/* <label htmlFor="fileupload">Upload Image</label>
        <input type="file" id="fileupload" /> */}

                    <label className={style.formlabel}>
                        {/* <label className={style.formLabel}>Category Image</label> */}

                        <img src={uploadicon} alt="" className='img-fluid' style={{maxWidth: "50px"}}/>
                        <input
                            type="file"
                            className="form-control"
                            id="uploadFile"
                            accept="image/*"
                        //   onChange={(val) => imageHandle(val.target.files[0])}
                        />
                        Drop Your Files
                    </label>
                    {/* {image !="" &&   <img src={image} style={{ height: "100px", width: "100px" }} />} */}

                    {/* <label htmlFor="selectDrop">Select Option</label>
        <select id="selectDrop">
          <option>test1</option>
          <option>test1</option>
          <option>test1</option>
        </select> */}
                    {/* <label className={style.formLabel} htmlFor="descText">Description</label> */}
                    <textarea
                        className={style.formInput}
                        style={{ width: "100%" }}
                        // value={description}
                        // onChange={(val) => setdescription(val.target.value)}
                        id="descText"
                        name="descText"
                        placeholder='Description'
                        rows={1}
                        cols={10}
                    />

                    {/* <FormButton/> */}
                    {/* <button className="btn" style={{ marginLeft: "40%", background: "black", color: "#fff", fontFamily: "'Vollkorn', serif" }} >Submit</button> */}
                    <button className="btn mt-4 mb-4" >Submit</button>
                </form>

            </motion.div>

        </motion.div>
    )
}

export default FormModals