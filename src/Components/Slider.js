import { useEffect, useState } from "react";
import { data } from "../sliderImage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Slider = () => {
  const [state, setState] = useState(0);

  const previousButton = () => {
    setState((state) => (state === 0 ? data.length - 1 : state - 1));
  };

  const nextButton = () => {
    setState((state) => (state === data.length - 1 ? 0 : state + 1));
  };

  useEffect(() => {
    const timer = setTimeout(nextButton, 6500);
    return () => {
      clearTimeout(timer);
    };
  }, [state]);

  return (
    <div className="slider-container">
      <div
        className="slider"
        style={{
          display: "flex",
          transform: `translateX(-${state * 100}%)`,
          transition: "transform 1s ease-in-out",
        }}
      >
        {data.map((item, index) => (
          <img
            key={index}
            alt={`img-${index}`}
            className="slider-image"
            src={item.img}
          />
        ))}
      </div>

      <button onClick={previousButton} className="btn-previous">
        <FontAwesomeIcon className="btn-previous-icon" icon={faArrowLeft} />
      </button>
      <button onClick={nextButton} className="btn-next">
        <FontAwesomeIcon className="btn-next-icon" icon={faArrowRight} />
      </button>
      <div className="btn-bot-ppp">
        {data.map((_, index) => (
          <button
            key={index}
            onClick={() => setState(index)}
            className={`btn-bot ${state === index ? "active" : ""}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Slider;
