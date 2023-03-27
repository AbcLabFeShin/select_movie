import { HomeCarousel, MyCarousel } from "../../components/Carousel";
import React from "react";
import styles from "./home.module.scss";

const Category = () => {
  return (
    <div className={styles.categoryWrapper}>
      <h2>🔥 개봉 예정 🔥</h2>
      <HomeCarousel />
      <h2>👀 오늘 이거 볼래? 👀</h2>
      <HomeCarousel />
      <h2>이것은 마이페이지 리뷰박스</h2>
      <MyCarousel />
    </div>
  );
};

export default Category;
