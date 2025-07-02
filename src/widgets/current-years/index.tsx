import { useRef, useState } from "react";
import * as styles from "./styles.module.scss";
import { years } from "../../pages/main/consts/years";
import type { Years } from "../../pages/main/types";
import { SwiperButton } from "../../shared/ui/swiper-button";
import LeftArrowIcon from "../../shared/assets/left-arrow.svg";
import RightArrowIcon from "../../shared/assets/right-arrow.svg";

export const CurrentYears = () => {
  const [index, setIndex] = useState<number>(0);
  const [currentYears, setCurrentYears] = useState<Years>({
    ...years[index],
  });

  const onClickPrev = () => {
    const newIndex = index - 1;
    setIndex(newIndex);
    setCurrentYears({
      ...years[newIndex],
    });
  };

  const onClickNext = () => {
    const newIndex = index + 1;
    setIndex(newIndex);
    setCurrentYears({
      ...years[newIndex],
    });
  };

  return (
    <>
      <h1 className={styles.years}>
        <span className={styles.firstYear}>{currentYears.firstYear}</span>
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
    </>
  );
};
