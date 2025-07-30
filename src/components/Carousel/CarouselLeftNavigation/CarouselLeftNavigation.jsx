import { useState } from "react";
import { useSwiper } from "swiper/react";
import { ReactComponent as LeftArrow } from "../../../assets/LeftArrow.svg";
import styles from "./CarouselLeftNavigation.module.css";

export default function CarouselLeftNavigation() {
  const swiper = useSwiper();

  const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);

  // useEffect(() => {
  //   // swiper.on("slideChange", function () {
  //   //   setIsBeginning(swiper.isBeginning);
  //   // });
  // }, []);

  swiper.on("slideChange", function () {
    setIsBeginning(swiper.isBeginning);
  });

  return (
    <div className={styles.leftNavigation}>
      {!isBeginning && <LeftArrow onClick={() => swiper.slidePrev()} />}
    </div>
  );
}
