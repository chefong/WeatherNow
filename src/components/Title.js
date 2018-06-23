import React from "react";
import './Title.css';

const Title = () => {
  return (
    <div>
      <img id="weather-now-logo" src={require("../imgs/weather-now-logo.png")} alt="Weather Now logo"/>
    </div>
  );
}

export default Title;