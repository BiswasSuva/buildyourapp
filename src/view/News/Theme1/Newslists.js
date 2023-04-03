import React from 'react'
import style from "./news.module.css"
import newslogo from "../../../images/newslogo.png"
import articleimage from "../../../images/articleimage.png"
function Newslists() {
  const newslist = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 }
  ]
  return (
    <div className={style.newslist}>
      <div className='container'>
        <div className='row'>
          {newslist.map((item, index) => (
            <div className='col-12 d-flex justify-content-between'>
              <div className={style.articlesection} style={{ maxWidth: "70%" }}>
                <div className={style.newsdate}>
                  <img src={newslogo} alt="News Logo" className='' />
                  <h2>Fryday, 17 June 2022</h2>
                </div>
                <div className={style.article}>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor id at at curabitur. Elementum est eget eget arcu sed.</p>
                </div>
                <div className={style.articlepara}>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque lectus semper neque risus nibh etiam duis purus</p>
                </div>
              </div>

              <div className={style.articlesection} style={{ maxWidth: "25%" }}>
                <div className={style.articletime}>
                  <p>11:20 am</p>
                </div>
                <div className={style.articleimage}>
                  <img src={articleimage} alt="Articl Image" className='img-fluid' />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Newslists