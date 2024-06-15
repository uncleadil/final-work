import { useState } from "react";
import { data } from "../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Slider = () => {
  const [state, setState] = useState(0);
  const { img } = data[state];

  const previousButton = () => {
    setState((state) => {
      state--;
      if (state < 0) {
        state = data.length - 1;
      }
      return state;
    });
  };

  const nextButton = () => {
    setState((state) => {
      state++;
      if (state > data.length - 1) {
        state = 0;
      }
      return state;
    });
  };

  const botButtons = (state) => {
    setState(state);
  };

  return (
    <div style={{ position: "relative" }}>
      <div style={{ display: "flex", overflowX: "hidden" }}>
        <img
          alt="img-first"
          style={{ width: "100%", height: "600px" }}
          src={img}
        ></img>
        <button onClick={previousButton} className="btn-previous">
          <FontAwesomeIcon className="btn-previous-icon" icon={faArrowLeft} />
        </button>
        <button onClick={nextButton} className="btn-next">
          <FontAwesomeIcon className="btn-next-icon" icon={faArrowRight} />
        </button>
        <div className="btn-bot-ppp">
          <button onClick={() => botButtons(0)} className="btn-bot"></button>
          <button onClick={() => botButtons(1)} className="btn-bot"></button>
          <button onClick={() => botButtons(2)} className="btn-bot"></button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
