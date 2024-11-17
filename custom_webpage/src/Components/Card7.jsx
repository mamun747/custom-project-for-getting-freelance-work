import Carousel from "react-bootstrap/Carousel";
import { Feedback } from "../data/Data";
import "bootstrap/dist/css/bootstrap.min.css";
import TextGradient from "./common/TextGradient";
import { useState, useEffect } from "react";

function Card7() {
  const [index, setIndex] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const handleSelect = (selectedIndex) => setIndex(selectedIndex);

  // Update `screenWidth` on resize
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Determine items per slide based on screen width
  const itemsPerSlide = screenWidth <= 640 ? 1 : screenWidth <= 768 ? 2 : 3;

  // Group the Feedback items into arrays of `itemsPerSlide` items each
  const groupedFeedback = [];
  for (let i = 0; i < Feedback.length; i++) {
    groupedFeedback.push(Feedback.slice(i, i + itemsPerSlide));
  }

  return (
    <>
      <div className="pt-5 md:pt-[60px] lg:pt-[120px] pb-5 md:pb-[50px] lg:pb-[150px] bg-[#ffffff]">
        <div className="">
          <div className="mt-5 pb-[30px] flex flex-col justify-center items-center">
            <TextGradient>Our Customer feedback</TextGradient>
            <p className="text-[rgba(29,29,36,.75)] text-[18px]">
              Our Fantastic Envato Customers Reviews
            </p>
          </div>
          <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            indicators={false}
            controls={false}
            slide={false}
            fade
          >
            {groupedFeedback.map((group, i) => (
              <Carousel.Item key={i}>
                <div className="flex justify-center space-x-5 md:my-11 sm:px-2 md:px-4 lg:px-0">
                  {group.map(
                    (
                      {
                        icon,
                        iconContent,
                        iconSecondContent,
                        title,
                        content,
                        rating,
                      },
                      j
                    ) => (
                      <div
                        key={j}
                        className="bg-[#F6F6F6] py-[41px] px-[39px] min-h-[375px] max-w-[370px]"
                      >
                        <div className="flex gap-2 items-center transition-transform ">
                          <img src={icon} alt="" />
                          <div>
                            <div>{iconContent}</div>
                            <div className="text-[#f9004d]">
                              {iconSecondContent}
                            </div>
                          </div>
                        </div>
                        <h5 className="mb-[15px] mt-2 text-[#1f1f25] font-[500]">
                          {title}
                        </h5>
                        <p>{content}</p>
                        <img
                          src={rating}
                          alt="rating"
                          className="mt-6 max-h-[35px]"
                        />
                      </div>
                    )
                  )}
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
          <div className="flex justify-center items-center space-x-5 mt-5">
            {groupedFeedback.map((_, i) => (
              <button
                key={i}
                className={`indicators ${i === index ? "active" : ""}`}
                onClick={() => setIndex(i)}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Card7;
