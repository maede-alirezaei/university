import React from "react";
import { Slide } from "react-slideshow-image";
import bookImg from "../../assets/book.jpg";
import infoImg from "../../assets/UniImg.jpg";
import "react-slideshow-image/dist/styles.css";

const SlideShow = () => {
  const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
    pauseOnHover: true,
    onChange: (oldIndex, newIndex) => {
      console.log(`slide transition from ${oldIndex} to ${newIndex}`);
    },
  };
  const slideImages = [
    {
      src: bookImg,
      caption: "اعلامیه اول",
    },
    {
      src: infoImg,
      caption: "اعلامیه دوم",
    },
    {
      src: bookImg,
      caption: "اعلامیه سوم",
    },
  ];

  return (
    <>
      <div className="slide-container px-32">
        <Slide {...properties}>
          {slideImages.map((slideImage, index) => (
            <div className="each-slide text-center p-32" key={index}>
              <img
                className="m-auto rounded-lg"
                src={slideImage.src}
                alt={slideImage.caption}
              ></img>
              <p>{slideImage.caption}</p>
            </div>
          ))}
        </Slide>
      </div>
    </>
  );
};

export default SlideShow;
