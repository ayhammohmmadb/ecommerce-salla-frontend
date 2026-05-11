import React from "react";
import HeroSlider from "../../components/HeroSlider";
import "./Home.css";
import SlideProduct from "../../components/slideProducts/SlideProduct";
const Categories=[
  "smartphones",
  "laptops",
  "mens-watches",
  "mobile-accessories",
  "fragrances",
  "furniture",
  "mens-shirts",
]
const Home = () => {
  return (
    <div>
      <HeroSlider />
      {Categories.map((category)=><SlideProduct category={category} />)}
    </div>
  );
};

export default Home;
