import React from "react";
import './Weather.css';

// const weatherImages = [
//   require('../imgs/weather-icons/1.png'),
//   require('../imgs/weather-icons/2.png'),
//   require('../imgs/weather-icons/3.png'),
//   require('../imgs/weather-icons/4.png'),
//   require('../imgs/weather-icons/5.png'),
//   require('../imgs/weather-icons/6.png'),
//   require('../imgs/weather-icons/7.png'),
//   require('../imgs/weather-icons/8.png'),
//   require('../imgs/weather-icons/8.png'),
//   require('../imgs/weather-icons/8.png'),
//   require('../imgs/weather-icons/11.png'),
//   require('../imgs/weather-icons/12.png'),
//   require('../imgs/weather-icons/13.png'),
//   require('../imgs/weather-icons/14.png'),
//   require('../imgs/weather-icons/15.png'),
//   require('../imgs/weather-icons/16.png'),
//   require('../imgs/weather-icons/17.png'),
//   require('../imgs/weather-icons/18.png'),
//   require('../imgs/weather-icons/19.png'),
//   require('../imgs/weather-icons/20.png'),
//   require('../imgs/weather-icons/21.png'),
//   require('../imgs/weather-icons/22.png'),
//   require('../imgs/weather-icons/23.png'),
//   require('../imgs/weather-icons/24.png'),
//   require('../imgs/weather-icons/25.png'),
//   require('../imgs/weather-icons/26.png'),
//   require('../imgs/weather-icons/26.png'),
//   require('../imgs/weather-icons/26.png'),
//   require('../imgs/weather-icons/29.png'),
//   require('../imgs/weather-icons/30.png'),
//   require('../imgs/weather-icons/31.png'),
//   require('../imgs/weather-icons/32.png'),
//   require('../imgs/weather-icons/33.png'),
//   require('../imgs/weather-icons/34.png'),
//   require('../imgs/weather-icons/35.png'),
//   require('../imgs/weather-icons/36.png'),
//   require('../imgs/weather-icons/37.png'),
//   require('../imgs/weather-icons/38.png'),
//   require('../imgs/weather-icons/39.png'),
//   require('../imgs/weather-icons/40.png'),
//   require('../imgs/weather-icons/41.png'),
//   require('../imgs/weather-icons/42.png'),
//   require('../imgs/weather-icons/43.png'),
//   require('../imgs/weather-icons/44.png')
// ];

class Weather extends React.Component {

  getImagePath() {
    console.log("../imgs/weather-icons/" + this.props.iconNumber + ".png");
    return "../imgs/weather-icons/" + this.props.iconNumber + ".png";
  }

  render() {
    return(
      <div className="row justify-content-center" id="current-weather-container">
        <div className="col-md-4 condition-columns">
          { this.props.iconNumber && <div id="weather-image-container"><img id="weather-status-icon" src={this.props.weatherImages[this.props.iconNumber - 1]}/></div> }
          { this.props.weatherStatus && <p className="weather-text" id="weather-status">{ this.props.weatherStatus }</p>}
        </div>
        <div className="col-md-6 condition-columns" id="right-conditions">
          { this.props.high && <h6 className="weather-text" id="current-text"><em>Current conditions:</em></h6> }
          { this.props.high && <p className="weather-text" id="high-text"> High: { this.props.high } &deg;F</p> }
          { this.props.low && <p className="weather-text" id="low-text"> Low: { this.props.low } &deg;F</p> }
        </div>
      </div>
    );
  }
}

export default Weather;