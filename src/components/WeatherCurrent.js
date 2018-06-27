import React from "react";
import './WeatherCurrent.css';

class WeatherCurrent extends React.Component {

  getImagePath() {
    console.log("../imgs/weather-icons/" + this.props.iconNumber + ".png");
    return "../imgs/weather-icons/" + this.props.iconNumber + ".png";
  }

  render() {
    return(
      <div className="container-fluid">
        <div className="row justify-content-center" id="current-weather-container">
          <div className="col-md-4">
            { this.props.weatherStatus && <h5 id="current-text">Current Conditions</h5>}
          </div>
        </div>
        <div className="row justify-content-center" id="current-container">
          <div id="left" className="col-md-3 float-right">
            { this.props.iconNumber && <div id="weather-image-container"><img id="weather-status-icon" src={this.props.weatherImages[this.props.iconNumber - 1]}/></div> }
            { this.props.weatherStatus && <p className="weather-text" id="weather-status">{ this.props.weatherStatus }</p>}
          </div>
          <div id="right" className="col-md-3">
            { this.props.currentTempF && <h6 className="weather-text" id="current-temp"><em>Temperature:</em></h6> }
            { this.props.currentTempF && <p className="weather-text" id="fahr"> { this.props.currentTempF } &deg;F</p> }
            { this.props.currentTempC && <p className="weather-text" id="cel"> { this.props.currentTempC } &deg;C</p> }
          </div>
        </div>
      </div>
    );
  }
}

export default WeatherCurrent;