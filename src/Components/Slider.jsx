"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import img1 from "../../public/Assets/Home/slider1.jpg"
import img2 from "../../public/Assets/Home/slider (1).png"
import img3 from "../../public/Assets/Home/slider (2).jpg"
import Image from "next/image";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay} from 'swiper/modules';


const Slider = () => {
    return (
        <>
            <div className=" w-full max-h-[75vh] ">
                <Swiper className="mySwiper"
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                >
                    <SwiperSlide>
                        <Image src={img1} alt="slider" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={img2} alt="slider" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={img3} className="w-full h-full" alt="slider" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}

export default Slider