import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import { useNavigate } from "react-router-dom";
import { getAllProf } from "../../api/appApi";
import { updateUserDetail } from "../../api/authapi";
import Swal from "sweetalert2";
import { toast } from "react-hot-toast";
function Professionslider() {
  const professions = useAllProfession();
  const navigate = useNavigate();

  const SelectProfession = async (id) => {
    let data = {
      profession_id: id,
      nextURL: "/modules",
    };
    // console.log(id);
    let result = await updateUserDetail(data);
    if (result && result.status) {

      toast('Nice few steps are pending !',
      {
        icon: '👏',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      }
    );   
    navigate("/modules");

    // setTimeout(()=>{

    // })
    
    // Swal.fire({
    //     title: "Thank You!",
    //     // text: 'Do you want to continue',
    //     icon: "success",
    //     confirmButtonText: "Move to next step",
    //   }).then((result) => {
    //     if (result.isConfirmed) {
    //       navigate("/modules");
    //     }
    //   });
    }
  };

  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={false}
      modules={[EffectCoverflow, Pagination]}
      className="mySwiper"
    >
      {professions.map((item,i) => {
        return (
          <SwiperSlide key={item._id}>
            <img
              src={item.prof_pic}
              style={{ width: "100%" }}
              onClick={() => SelectProfession(item._id)}
            />
            <div className="card-body bg-white rounded-bottom ">
              <h5 className="font-18 mb-0 text-dark">{item.prof_name}</h5>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default Professionslider;
function useAllProfession() {
  const [prof, setProf] = useState([]);
  useEffect(() => {
    fetchAllProfession();
  }, []);
  const fetchAllProfession = async () => {
    let result = await getAllProf();
    if (result && result.status) {
      setProf(result.data);
    }
  };
  return prof;
}
