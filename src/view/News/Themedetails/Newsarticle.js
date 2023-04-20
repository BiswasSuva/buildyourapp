import React from 'react'
import style from "./newsthemedetails.module.css";
import newslogo from "../../../images/newslogo.png"
function Newsarticle() {
  return (
    <div className={style.newsarticle}>
      <div className='container'>
        <div className='row'>
          <div className='col-8'>
            <div className='d-flex'>
              <img src={newslogo} alt="Logo" className={style.logoitem} />
              <h4 className={style.titlenews}>Fryday, 17 June 2022</h4>
            </div>
          </div>
          <div className='col-4 d-flex justify-content-end'>
            <div className={style.time}>
              <p>11:20 am</p>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col-12'>
            <p className={style.newsline}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor id at at curabitur. Elementum est eget eget arcu sed.</p>
            <p className={style.para}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor est turpis non lectus. Lectus ullamcorper placerat commodo euismod. Sit id orci cursus neque, elementum odio est at. In tempor nulla eu nibh in sit congue. Iaculis ultrices et vulputate nisl ultricies sed id in. Sem venenatis aliquam enim tristique eget venenatis at. Mattis et mi non leo, tempor sapien etiam bibendum viverra. Eleifend ultricies scelerisque lorem sapien. Augue ullamcorper commodo egestas ac, feugiat adipiscing.</p>
            <p className={style.para}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eros, amet vitae consectetur interdum metus tincidunt. In suspendisse eu aliquet pellentesque consectetur quis diam quis. Massa nam quam amet, dui non. Vitae proin ut vel auctor. Urna vel sit tempus odio tristique eget elementum pellentesque. Sit consectetur ultrices et, faucibus in vivamus. Non vestibulum pellentesque in porttitor maecenas elit, ac. Enim eget maecenas purus nunc lacus, sodales amet. Volutpat facilisi viverra sem in. Volutpat congue pellentesque quam egestas. At urna, cursus nec sem tincidunt vitae donec. Et massa maecenas placerat scelerisque nunc, egestas pellentesque. Volutpat fermentum nisl massa ullamcorper sit ac in interdum. Pulvinar et lorem quis cras porta ipsum. Mauris neque urna lorem pellentesque adipiscing netus. Adipiscing risus non habitant mauris tortor eu tortor. Pharetra at mattis orci montes, eu libero maecenas elementum. Lorem elit amet ut nunc massa purus nulla etiam sem. Urna, aliquet varius nibh mauris. Enim lectus aenean feugiat pretium, fringilla nunc,</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Newsarticle