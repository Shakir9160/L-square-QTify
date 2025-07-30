import { useState } from "react";
import { useSwiper } from "swiper/react";
import { ReactComponent as RightArrow } from "../../../assets/RightArrow.svg";
import styles from "./CarouselRightNavigation.module.css";

export default function CarouselRightNavigation() {
  const swiper = useSwiper();

  const [isEnd, setIsEnd] = useState(swiper.isEnd);

  // useEffect(() => {
  //   swiper.on("slideChange", function () {
  //     setIsEnd(swiper.isEnd);
  //   });
  // }, []);

  swiper.on("slideChange", function () {
    setIsEnd(swiper.isEnd);
  });

  return (
    <div className={styles.rightNavigation}>
      {!isEnd && (
        <RightArrow
          data-cy="carousel-next-button"
          onClick={() => swiper.slideNext()}
        />
      )}
    </div>
  );
}
