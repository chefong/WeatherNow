import React from "react";
import './WeatherFive.css';

const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

class WeatherFive extends React.Component {

  getDayOfWeek(num) {
    let d = new Date(this.props.fiveDays[num].Date);
    return DAYS[d.getDay()];
  }

  fahrenheitToCelsius(temp) {
    let calc = (temp - 32) * 5/9;
    return calc.toFixed(1);
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-2">
            { this.props.fiveDays && <h6 className="day-of-week">Today</h6> }
            { this.props.fiveDays && <h5 className="day-night">Day</h5> }
            { this.props.fiveDays && <div className="weather-image-five-container"><img className="weather-status-five-icon" src={this.props.weatherImages[this.props.fiveDays[0].Day.Icon - 1]} alt="forecast icon"/></div> }
            { this.props.fiveDays && <h6 className="day-night-status">{ this.props.fiveDays[0].Day.IconPhrase }</h6> }
            { this.props.fiveDays && <h5 className="day-night">Night</h5> }
            { this.props.fiveDays && <div className="weather-image-five-container"><img className="weather-status-five-icon" src={this.props.weatherImages[this.props.fiveDays[0].Night.Icon - 1]} alt="forecast icon"/></div> }
            { this.props.fiveDays && <h6 className="day-night-status">{ this.props.fiveDays[0].Night.IconPhrase }</h6> }
            <div className="high-low-container">
              { this.props.fiveDays && <h6 className="five-temp high"><span className="high-low-fahr">{ this.props.fiveDays[0].Temperature.Maximum.Value } &deg;F</span> <span className="high-low-celsius">{ this.fahrenheitToCelsius(this.props.fiveDays[0].Temperature.Maximum.Value) } &deg;C</span></h6> }
              { this.props.fiveDays && <h6 className="five-temp low"><span className="high-low-fahr">{ this.props.fiveDays[0].Temperature.Minimum.Value } &deg;F</span> <span className="high-low-celsius">{ this.fahrenheitToCelsius(this.props.fiveDays[0].Temperature.Minimum.Value) } &deg;C</span></h6> }
            </div>
          </div>
          <div className="col-md-2">
            { this.props.fiveDays && <h6 className="day-of-week">Tomorrow</h6> }
            { this.props.fiveDays && <h5 className="day-night">Day</h5> }
            { this.props.fiveDays && <div className="weather-image-five-container"><img className="weather-status-five-icon" src={this.props.weatherImages[this.props.fiveDays[1].Day.Icon - 1]} alt="forecast icon"/></div> }
            { this.props.fiveDays && <h6 className="day-night-status">{ this.props.fiveDays[1].Day.IconPhrase }</h6> }
            { this.props.fiveDays && <h5 className="day-night">Night</h5> }
            { this.props.fiveDays && <div className="weather-image-five-container"><img className="weather-status-five-icon" src={this.props.weatherImages[this.props.fiveDays[1].Night.Icon - 1]} alt="forecast icon"/></div> }
            { this.props.fiveDays && <h6 className="day-night-status">{ this.props.fiveDays[1].Night.IconPhrase }</h6>}
            <div className="high-low-container">
              { this.props.fiveDays && <h6 className="five-temp high"><span className="high-low-fahr">{ this.props.fiveDays[1].Temperature.Maximum.Value } &deg;F</span> <span className="high-low-celsius">{ this.fahrenheitToCelsius(this.props.fiveDays[1].Temperature.Maximum.Value) } &deg;C</span></h6> }
              { this.props.fiveDays && <h6 className="five-temp low"><span className="high-low-fahr">{ this.props.fiveDays[1].Temperature.Minimum.Value } &deg;F</span> <span className="high-low-celsius">{ this.fahrenheitToCelsius(this.props.fiveDays[1].Temperature.Minimum.Value) } &deg;C</span></h6> }
            </div>
          </div>
          <div className="col-md-2">
            { this.props.fiveDays && <h6 className="day-of-week">{ this.getDayOfWeek(2) }</h6> }
            { this.props.fiveDays && <h5 className="day-night">Day</h5> }
            { this.props.fiveDays && <div className="weather-image-five-container"><img className="weather-status-five-icon" src={this.props.weatherImages[this.props.fiveDays[2].Day.Icon - 1]} alt="forecast icon"/></div> }
            { this.props.fiveDays && <h6 className="day-night-status">{ this.props.fiveDays[2].Day.IconPhrase }</h6> }
            { this.props.fiveDays && <h5 className="day-night">Night</h5> }
            { this.props.fiveDays && <div className="weather-image-five-container"><img className="weather-status-five-icon" src={this.props.weatherImages[this.props.fiveDays[2].Night.Icon - 1]} alt="forecast icon"/></div> }
            { this.props.fiveDays && <h6 className="day-night-status">{ this.props.fiveDays[2].Night.IconPhrase }</h6>}
            <div className="high-low-container">
              { this.props.fiveDays && <h6 className="five-temp high"><span className="high-low-fahr">{ this.props.fiveDays[2].Temperature.Maximum.Value } &deg;F</span> <span className="high-low-celsius">{ this.fahrenheitToCelsius(this.props.fiveDays[2].Temperature.Maximum.Value) } &deg;C</span></h6> }
              { this.props.fiveDays && <h6 className="five-temp low"><span className="high-low-fahr">{ this.props.fiveDays[2].Temperature.Minimum.Value } &deg;F</span> <span className="high-low-celsius">{ this.fahrenheitToCelsius(this.props.fiveDays[2].Temperature.Minimum.Value) } &deg;C</span></h6> }
            </div>
          </div>
          <div className="col-md-2">
            { this.props.fiveDays && <h6 className="day-of-week">{ this.getDayOfWeek(3) }</h6> }
            { this.props.fiveDays && <h5 className="day-night">Day</h5> }
            { this.props.fiveDays && <div className="weather-image-five-container"><img className="weather-status-five-icon" src={this.props.weatherImages[this.props.fiveDays[3].Day.Icon - 1]} alt="forecast icon"/></div> }
            { this.props.fiveDays && <h6 className="day-night-status">{ this.props.fiveDays[3].Day.IconPhrase }</h6> }
            { this.props.fiveDays && <h5 className="day-night">Night</h5> }
            { this.props.fiveDays && <div className="weather-image-five-container"><img className="weather-status-five-icon" src={this.props.weatherImages[this.props.fiveDays[3].Night.Icon - 1]} alt="forecast icon"/></div> }
            { this.props.fiveDays && <h6 className="day-night-status">{ this.props.fiveDays[3].Night.IconPhrase }</h6>}
            <div className="high-low-container">
              { this.props.fiveDays && <h6 className="five-temp high"><span className="high-low-fahr">{ this.props.fiveDays[3].Temperature.Maximum.Value } &deg;F</span> <span className="high-low-celsius">{ this.fahrenheitToCelsius(this.props.fiveDays[3].Temperature.Maximum.Value) } &deg;C</span></h6> }
              { this.props.fiveDays && <h6 className="five-temp low"><span className="high-low-fahr">{ this.props.fiveDays[3].Temperature.Minimum.Value } &deg;F</span> <span className="high-low-celsius">{ this.fahrenheitToCelsius(this.props.fiveDays[3].Temperature.Minimum.Value) } &deg;C</span></h6> }
            </div>
          </div>
          <div className="col-md-2">
            { this.props.fiveDays && <h6 className="day-of-week">{ this.getDayOfWeek(4) }</h6> }
            { this.props.fiveDays && <h5 className="day-night">Day</h5> }
            { this.props.fiveDays && <div className="weather-image-five-container"><img className="weather-status-five-icon" src={this.props.weatherImages[this.props.fiveDays[4].Day.Icon - 1]} alt="forecast icon"/></div> }
            { this.props.fiveDays && <h6 className="day-night-status">{ this.props.fiveDays[4].Day.IconPhrase }</h6> }
            { this.props.fiveDays && <h5 className="day-night">Night</h5> }
            { this.props.fiveDays && <div className="weather-image-five-container"><img className="weather-status-five-icon" src={this.props.weatherImages[this.props.fiveDays[4].Night.Icon - 1]} alt="forecast icon"/></div> }
            { this.props.fiveDays && <h6 className="day-night-status">{ this.props.fiveDays[4].Night.IconPhrase }</h6>}
            <div className="high-low-container">
              { this.props.fiveDays && <h6 className="five-temp high"><span className="high-low-fahr">{ this.props.fiveDays[4].Temperature.Maximum.Value } &deg;F</span> <span className="high-low-celsius">{ this.fahrenheitToCelsius(this.props.fiveDays[4].Temperature.Maximum.Value) } &deg;C</span></h6> }
              { this.props.fiveDays && <h6 className="five-temp low"><span className="high-low-fahr">{ this.props.fiveDays[4].Temperature.Minimum.Value } &deg;F</span> <span className="high-low-celsius">{ this.fahrenheitToCelsius(this.props.fiveDays[4].Temperature.Minimum.Value) } &deg;C</span></h6> }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WeatherFive;