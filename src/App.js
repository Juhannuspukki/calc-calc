import React, { useState } from 'react';
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import './App.css';

const App = () => {
  const [price, setPrice] = useState(720)
  const [sliderValue, setSliderValue] = useState(3)
  return (
    <div className="App">
      <div className={"Slider-Container"}>
        <Slider
          min={1}
          max={10}
          step={1}
          defaultValue={3}
          onChange={(value) => {setPrice(value * 240); setSliderValue(value)}}
          railStyle={{ backgroundColor: "#636465" }}
          trackStyle={{ backgroundColor: "#FFFFFF" }}
          dotStyle={{
            borderColor: "#636465",
            backgroundColor: "#232425",
            top: -4,
            height: 12,
            width: 12,
          }}
          activeDotStyle={{ borderColor: "#FFFFFF" }}
          handleStyle={{
            borderColor: "#FFFFFF",
            backgroundColor: "#FFFFFF",
            marginTop: -8,
            height: 20,
            width: 20,
          }}
          dots
        />
      </div>
      <div className={"half"}>
        <h2>Muuttujia</h2>
        <p>{sliderValue}</p>
      </div>
      <div className={"half"}>
        <h2>Hinta</h2>
        <p>{price} € + alv</p>
      </div>
    </div>
  );
}

export default App;
