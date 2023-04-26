import React, { useEffect, useState } from 'react'
import style from "./ott.module.css";
import Slider from "react-slick";
import { getOttGenre } from '../../../api/appApi';
import { useElementList } from '../../../Providers/ElemetProvider';
var settings = {
    dots: false,
    infinite: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1500,
    ltr: true,
    slide: '',
    cssEase: 'linear',
    speed: 2000,
    slidesToShow: 3.5,
    slidesToScroll: 2
};

let arr = [
    {
        name:'Action'
    },
    {
        name:'Drama'
    }, {
        name:'Adventure'
    }, {
        name:'Comedy'
    }, {
        name:'Mystery'
    }, 
]
function Todaytopmovie({ feild }) {

    const {rerender,setRender} = useElementList()
     const [ottGenre,setOttGenre] = useState(arr)


   

    let Heading = feild.find((item) => item.key === "Heading")?.value;
    let color = feild.find((item) => item.key === "Active Color")?.value;


    useEffect(()=>{
        fetchGenre()
    },[rerender])



    const fetchGenre =async ()=>{
            let result  = await getOttGenre()
            if(result && result.status && result.data.length>0){
                setOttGenre(result.data)
            }
            else{
                setOttGenre(arr)
            }
    }



    return (
        <div className={style.Todaytopmovie}>
            <div className='container'>
                <div className='row mb-1'>
                    <div className='col-8'>
                        <h1 className={style.toptitle}>{Heading}</h1>
                    </div>
                    <div className='col-4 text-right'>
                        <p className={style.seeall} style={{color}}>See All</p>
                    </div>
                </div>

                <div className={style.allbtns}>
                    <Slider {...settings}>
                        <button className={style.btns}>All</button>

                        {ottGenre.map((item,i)=>{
                            return  <button key={i} className={style.btns}>{item.name}</button>
                        })

                        }
                        {/* <button className={style.btns}>Action</button>
                        <button className={style.btns}>Adventure</button>
                        <button className={style.btns}>Mystery</button> */}
                   
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Todaytopmovie