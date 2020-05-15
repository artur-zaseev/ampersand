import React from "react";
import Slider from "./Slider";

import {ReactComponent as IconSwipe} from "../static/icon_swipe.svg";

export default ({slidesCount, basket}) => {
  return (
    <div className="main">
      <div className="main_h1">
        <h1>
          «Амперсанд» — это история о людях, искренне увлеченных своим делом.
        </h1>
      </div>
      <Slider slidesCount={slidesCount} basket={basket} />
      <div className="main_swipe">
        <IconSwipe />
      </div>
    </div>
  );
};
