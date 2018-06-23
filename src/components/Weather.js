import React from "react";
import './Weather.css';

const Weather = props => {
  return(
    <div>
      { props.name && props.area && props.country && <h4> Results for { props.name }, { props.area }, { props.country }</h4> }
      { props.high && <p className="temperature"> High: { props.high } &deg;F</p> }
      { props.low && <p className="temperature"> Low: { props.low } &deg;F</p> }
    </div>
  );
}

export default Weather;