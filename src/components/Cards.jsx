import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Pagination, Autoplay  } from "swiper/modules";
import style from "./Cards.module.css"
import images from "../constants/gallery";

import "swiper/css";
import "swiper/css/effect-cards";

export default function Cards() {
  return (
    <Swiper
      effect={"cards"}
      grabCursor={true}
      pagination={true}
      autoplay={true}
      modules={[EffectCards, Pagination, Autoplay]}
      className={style.swiper}
    >
      {images.map((image, idx) => (
        <SwiperSlide key={idx} className={style.swiperSlide}>
          <img src={image.src} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
