import React, { useEffect, useState } from "react";
import { PreviousArrow, NextArrow } from "../assets/Arrow";
import constant from "../util/constant";
import { Link } from "react-router-dom";
import urlParamGet from "../util/urlParamGet";

const Hero = (props) => {
  const [slideIndex, setSlideIndex] = useState(0); // Tracks the current group of images
  const [mid, setMid] = useState([]); // Stores the list of images

  // Number of images to show in one view
  const itemsPerView = 6;
  const slidesToMove = 3;

  useEffect(() => {
    setMid(props?.data);
  }, [props]);

  // Move to the next group of slides
  const nextSlide = () => {
    setSlideIndex((prevIndex) => {
      const newIndex = prevIndex + slidesToMove;
      return newIndex >= mid.length - itemsPerView
        ? mid.length - itemsPerView
        : newIndex;
    });
  };

  // Move to the previous group of slides
  const prevSlide = () => {
    setSlideIndex((prevIndex) => {
      const newIndex = prevIndex - slidesToMove;
      return newIndex < 0 ? 0 : newIndex;
    });
  };

  // Check if the next button should be disabled
  const isNextDisabled = slideIndex + itemsPerView >= mid?.length;

  // Check if the previous button should be disabled
  const isPrevDisabled = slideIndex === 0;

  return (
    <div className="pt-24 bg-gray-50">
      <div className="ml-52 mr-48 flex justify-between">
        <div className="head block mt-1">
          <h4 className="text-2xl font-bold">What's on your mind?</h4>
        </div>
        <div className="buttons block">
          {isPrevDisabled === true ? (
            <button
              className="rounded-full mr-3"
              style={{
                background: "rgb(226 232 240)",
                borderRadius: "50%",
              }}
              onClick={prevSlide} // Handle previous slide
            >
              <div className="previous p-2">
                <PreviousArrow condetion={true} />
              </div>
            </button>
          ) : (
            <button
              className="rounded-full mr-3"
              style={{
                background: "rgba(2, 6, 12, 0.15)",
                borderRadius: "50%",
              }}
              onClick={prevSlide} // Handle previous slide
            >
              <div className="previous p-2">
                <PreviousArrow condetion={false} />
              </div>
            </button>
          )}

          {isNextDisabled === true ? (
            <button
              className="rounded-full"
              style={{
                background: "rgb(226 232 240)",
                borderRadius: "50%",
              }}
              onClick={nextSlide} // Handle next slide
            >
              <div className="next p-2">
                <NextArrow condetion={true} />
              </div>
            </button>
          ) : (
            <button
              className="rounded-full"
              style={{
                background: "rgba(2, 6, 12, 0.15)",
                borderRadius: "50%",
              }}
              onClick={nextSlide} // Handle next slide
            >
              <div className="next p-2">
                <NextArrow condetion={false} />
              </div>
            </button>
          )}
        </div>
      </div>

      {/* Wrap the slides in a container and animate translateX for the slide effect */}
      <div className="slider-container ml-52 mr-48 relative overflow-hidden border-b-2 pb-10 border-gray-150">
        <div
          className="slider-track flex transition-transform duration-500 ease-in-out mix-blend-multiply"
          style={{
            transform: `translateX(-${(slideIndex / mid?.length) * 328}%)`, // Moves the slides left/right
          }}
        >
          {mid?.length > 0 ? (
            mid.map((res) => {
              const obj = urlParamGet(res?.action?.link) 
              return(
              <div>
                <div>
                  <Link
                    to={`/collections/${obj.id}/${obj.tag}`}
                    key={res.id}
                  >
                    <div
                      className="card-body p-5"
                      style={{ minWidth: `${100 / itemsPerView}%` }}
                    >
                      {console.log(res)}
                      <a href="">
                        <div className="card h-36 w-36 mb-5">
                          <img
                            className="mix-blend-multiply"
                            src={constant?.IMG + res.imageId}
                            alt="Card Image"
                          />
                        </div>
                      </a>
                    </div>
                  </Link>
                </div>
              </div>
            )})
          ) : (
            <h2>Loading...</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
