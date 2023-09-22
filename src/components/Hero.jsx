import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import team from "../assets/team.jpg";
import banner from "../assets/banner.jpg";
import ctabg2 from "../assets/ctabg2.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Box } from "@mui/material";

export default function App() {
  return (
    <Box mt={6}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={team} alt="" style={{ width: "100%", height: "100vh" }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner} alt="" style={{ width: "100%", height: "100vh" }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ctabg2} alt="" style={{ width: "100%", height: "100vh" }} />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}
