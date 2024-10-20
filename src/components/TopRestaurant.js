import { useEffect, useState } from "react";
import { PreviousArrow, NextArrow } from "../assets/Arrow";
import Card from "./Card";

const TopRestaurant = (props) => {
  const [slideIndex, setSlideIndex] = useState(0); // Tracks the current group of images
  const [data, setData] = useState([]); // Stores the list of images

  const itemsPerView = 3; // Number of items to show at once
  const slidesToMove = 2; // Number of items to slide at a time

  useEffect(() => {
    setData(props.data);
  }, [props]);

  // Move to the next group of slides
  const nextSlide = () => {
    setSlideIndex((prevIndex) => {
      const newIndex = prevIndex + slidesToMove;
      return newIndex >= data.length - itemsPerView
        ? data.length - itemsPerView
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
  const isNextDisabled = slideIndex + itemsPerView >= data?.length;

  // Check if the previous button should be disabled
  const isPrevDisabled = slideIndex === 0;

  return (
    <div >
      {data && (
        <div>
          <div className="ml-52 mr-48 flex mt-10 justify-between">
            <div>
              <h2 className="text-2xl font-bold text-slate-950">
                Top restaurant chains in Kochi
              </h2>
            </div>
            <div className="flex">
              <button
                className="rounded-full mr-3"
                style={{
                  background: isPrevDisabled ? "rgb(226 232 240)" : "rgba(2, 6, 12, 0.15)",
                  borderRadius: "50%",
                }}
                onClick={prevSlide}
                disabled={isPrevDisabled}
              >
                <div className="previous p-2">
                  <PreviousArrow condetion={isPrevDisabled} />
                </div>
              </button>
              <button
                className="rounded-full"
                style={{
                  background: isNextDisabled ? "rgb(226 232 240)" : "rgba(2, 6, 12, 0.15)",
                  borderRadius: "50%",
                }}
                onClick={nextSlide}
                disabled={isNextDisabled}
              >
                <div className="next p-2">
                  <NextArrow condetion={isNextDisabled} />
                </div>
              </button>
            </div>
          </div>
          <div className="slider-container ml-52 mr-48 mt-2 relative overflow-hidden">
            <div
              className="slider-track flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${(slideIndex / data.length) *490}%)`, // Moves the slides left/right
              }}
            >
              {data.map((d, index) => (
                <div
                  className="card-body"
                  key={index}
                >
                  <Card key={d.id} data={d} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopRestaurant;
