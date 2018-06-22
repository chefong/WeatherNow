import React from "react";

const Weather = props => {
  return(
    <div>
      { props.name && props.area && props.country && <h4> Current temperature for: { props.name }, { props.area }, { props.country }</h4> }
      { props.high && <h6> High: { props.high }</h6> }
      { props.low && <h6> Low: { props.low }</h6> }
    </div>
  );
}

export default Weather;