import React, { useState } from "react";
import { TOP_PICKS } from "../util/constant";
import AddBtn from "./AddBtn";
import { PreviousArrow, NextArrow } from "../assets/Arrow"; // Assuming you have arrow icons

const TopPicks = ({ data, restro }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const itemsPerView = 2.5; // To show 2.5 cards at a time
  const slidesToMove = 1.5; // Move by 1 card at a time

  // Move to the next group of slides
  const nextSlide = () => {
    setSlideIndex((prevIndex) => {
      const newIndex = prevIndex + slidesToMove;
      return newIndex >= data.carousel.length - itemsPerView
        ? data.carousel.length - itemsPerView
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
  const isNextDisabled = slideIndex + itemsPerView >= data.carousel.length;

  // Check if the previous button should be disabled
  const isPrevDisabled = slideIndex === 0;

  return (
    <div className="mt-10 w-6/12 m-auto relative">
      <div className="flex justify-between items-center">
        <div className="font-bold text-xl">{data?.title}</div>

        {/* Arrows positioned on the right side next to the title */}
        <div className="flex items-center">
          {/* Previous Arrow */}
          <button
            onClick={prevSlide}
            disabled={isPrevDisabled}
            className={`rounded-full p-2 mr-2 ${
              isPrevDisabled ? "opacity-50" : ""
            }`}
            style={{ backgroundColor: "rgba(2, 6, 12, 0.15)" }}
          >
            <PreviousArrow condetion={isPrevDisabled} />
          </button>

          {/* Next Arrow */}
          <button
            onClick={nextSlide}
            disabled={isNextDisabled}
            className={`rounded-full p-2 ${isNextDisabled ? "opacity-50" : ""}`}
            style={{ backgroundColor: "rgba(2, 6, 12, 0.15)" }}
          >
            <NextArrow condetion={isNextDisabled} />
          </button>
        </div>
      </div>

      {/* Slider Container */}
      <div className="mt-5 relative overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${
              (slideIndex / data.carousel.length) * 100
            }%)`, // Moves the slides left/right
            width: `${(100 / itemsPerView) * data.carousel.length}%`, // Adjusts the width of the track
          }}
        >
          {data?.carousel.map((e, index) => (
            <div key={index} className="relative flex-none">
              <img
                src={TOP_PICKS + e?.creativeId}
                alt=""
                className="w-full h-auto p-1"
              />
              <div className="absolute bottom-3 right-4">
                <AddBtn data={{card: e?.dish}} restro={restro} />
              </div>
              <div className="absolute bottom-8 font-semibold left-5 text-white">
                ₹
                {e?.dish?.info?.price / 100 ||
                  e?.dish?.info?.defaultPrice / 100}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopPicks;
