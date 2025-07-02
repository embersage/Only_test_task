import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import * as styles from "./styles.module.scss";
import { Paragraph } from "../../entities";
import { CurrentYears, Events } from "../../widgets";

export const MainPage = () => {
  const swiperRef = useRef(null);

  return (
    <main className={styles.pageWrapper}>
      <div>
        <h2 className={styles.title}>Исторические даты</h2>
        <CurrentYears />
        <Events />
      </div>
    </main>
  );
};
