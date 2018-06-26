import React from "react";
import './Weather.css';

class Weather extends React.Component {

  getImagePath() {
    console.log("../imgs/weather-icons/" + this.props.iconNumber + ".png");
    return "../imgs/weather-icons/" + this.props.iconNumber + ".png";
  }

  render() {
    return(
      <div className="container-fluid">
        <div className="row justify-content-center" id="current-weather-container">
          <div id="left">
            { this.props.iconNumber && <div id="weather-image-container"><img id="weather-status-icon" src={this.props.weatherImages[this.props.iconNumber - 1]}/></div> }
            { this.props.weatherStatus && <p className="weather-text" id="weather-status">{ this.props.weatherStatus }</p>}
          </div>
          <div id="right">
            { this.props.high && <h6 className="weather-text" id="current-text"><em>Current conditions:</em></h6> }
            { this.props.high && <p className="weather-text" id="fahr"> { this.props.currentTempF } &deg;F</p> }
            { this.props.low && <p className="weather-text" id="cel"> { this.props.currentTempC } &deg;C</p> }
          </div>
        </div>
      </div>
    );
  }
}

export default Weather;