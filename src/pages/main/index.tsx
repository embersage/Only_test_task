import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import { years } from "./consts/years";
import { Years } from "./types";
import * as styles from "./styles.module.scss";
import { SwiperButton } from "../../shared/ui/swiper-button";
import LeftArrowIcon from "../../shared/assets/left-arrow.svg";
import RightArrowIcon from "../../shared/assets/right-arrow.svg";

export const MainPage = () => {
  const [index, setIndex] = useState<number>(0);
  const [currentYears, setCurrentYears] = useState<Years>({
    ...years[index],
  });
  const swiperRef = useRef(null);

  const onClickPrev = () => {
    if (!swiperRef.current) return;

    swiperRef.current.swiper.slidePrev();
    const newIndex = index - 1;
    setIndex(newIndex);
    setCurrentYears({
      ...years[newIndex],
    });
  };

  const onClickNext = () => {
    if (!swiperRef.current) return;

    swiperRef.current.swiper.slideNext();
    const newIndex = index + 1;
    setIndex(newIndex);
    setCurrentYears({
      ...years[newIndex],
    });
  };

  return (
    <main className={styles.pageWrapper}>
      <div>
        <h2 className={styles.title}>Исторические даты</h2>
        <h1 className={styles.years}>
          <span className={styles.firstYear}>{currentYears.firstYear}</span>{" "}
          <span className={styles.secondYear}>{currentYears.secondYear}</span>
        </h1>
        <div className={styles.swiperButtons}>
          <SwiperButton onClick={onClickPrev} disabled={index === 0}>
            <LeftArrowIcon />
          </SwiperButton>
          <SwiperButton
            onClick={onClickNext}
            disabled={index === years.length - 1}
          >
            <RightArrowIcon />
          </SwiperButton>
        </div>
        <Swiper
          ref={swiperRef}
          slidesPerView={3}
          freeMode={true}
          modules={[FreeMode]}
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
        </Swiper>
      </div>
    </main>
  );
};
