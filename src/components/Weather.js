import React from "react";

class Weather extends React.Component {
  render() {
    return(
      <div>
        <h4> Current temperature for: { this.props.name }, { this.props.area }, { this.props.country }</h4>
        <h6> High: { this.props.high }</h6>
        <h6> Low: { this.props.low }</h6>
      </div>
    );
  }
}

export default Weather;