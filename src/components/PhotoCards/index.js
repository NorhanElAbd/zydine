import React from "react";
import Slider from "react-slick";
import { eatOne, eatTwo, eatThree, eatFour } from "../../assets/images";
import "./style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PhotoCards = () => {
  const gallery = [
    { photo: eatOne, title: "cairo foodie" },
    { photo: eatTwo, title: "Zitouni" },
    { photo: eatThree, title: "Best Ribeyes 2021" },
    { photo: eatFour, title: "Best icecream" },
  ];

  return (
    <div className="gallery">
      <Slider
        slidesToShow={3}
        swipeToSlide={true}
        focusOnSelect={true}
        autoplay={true}
        autoplaySpeed={2000}
        infinite
        settings={{ arrow: false }}
      >
        {gallery.map((item) => (
          <div className="card">
            <div className="image-container">
              <img src={item.photo} className="card_photo" />
            </div>
            <p className="card_title">{item.title}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PhotoCards;
