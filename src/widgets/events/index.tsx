import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import * as styles from "./styles.module.scss";
import { years } from "../../pages/main/consts/years";
import type { Years } from "../../pages/main/types";
import { SwiperButton } from "../../shared/ui/swiper-button";
import LeftArrowIcon from "../../shared/assets/left-arrow.svg";
import RightArrowIcon from "../../shared/assets/right-arrow.svg";
import { Paragraph } from "../../entities";
import { paragraphs } from "../../pages/main/consts/paragraphs";

export const Events = () => {
  const [index, setIndex] = useState<number>(0);
  const [currentYears, setCurrentYears] = useState<Years>({
    ...years[index],
  });
  const swiperRef = useRef(null);

  return (
    <Swiper
      ref={swiperRef}
      slidesPerView={3}
      freeMode={true}
      modules={[FreeMode]}
      spaceBetween={80}
    >
      {paragraphs[index].map((item, i) => (
        <SwiperSlide key={i}>
          <Paragraph year={item.year} text={item.text} />{" "}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
