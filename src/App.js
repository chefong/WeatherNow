import React from "react";
import Title from "./components/Title";
import Form from "./components/Form";
import Weather from "./components/Weather";
 
const API_KEY = process.env.REACT_APP_API_KEY;

const weatherImages = [
  require('./imgs/weather-icons/1.png'),
  require('./imgs/weather-icons/2.png'),
  require('./imgs/weather-icons/3.png'),
  require('./imgs/weather-icons/4.png'),
  require('./imgs/weather-icons/5.png'),
  require('./imgs/weather-icons/6.png'),
  require('./imgs/weather-icons/7.png'),
  require('./imgs/weather-icons/8.png'),
  require('./imgs/weather-icons/8.png'),
  require('./imgs/weather-icons/8.png'),
  require('./imgs/weather-icons/11.png'),
  require('./imgs/weather-icons/12.png'),
  require('./imgs/weather-icons/13.png'),
  require('./imgs/weather-icons/14.png'),
  require('./imgs/weather-icons/15.png'),
  require('./imgs/weather-icons/16.png'),
  require('./imgs/weather-icons/17.png'),
  require('./imgs/weather-icons/18.png'),
  require('./imgs/weather-icons/19.png'),
  require('./imgs/weather-icons/20.png'),
  require('./imgs/weather-icons/21.png'),
  require('./imgs/weather-icons/22.png'),
  require('./imgs/weather-icons/23.png'),
  require('./imgs/weather-icons/24.png'),
  require('./imgs/weather-icons/25.png'),
  require('./imgs/weather-icons/26.png'),
  require('./imgs/weather-icons/26.png'),
  require('./imgs/weather-icons/26.png'),
  require('./imgs/weather-icons/29.png'),
  require('./imgs/weather-icons/30.png'),
  require('./imgs/weather-icons/31.png'),
  require('./imgs/weather-icons/32.png'),
  require('./imgs/weather-icons/33.png'),
  require('./imgs/weather-icons/34.png'),
  require('./imgs/weather-icons/35.png'),
  require('./imgs/weather-icons/36.png'),
  require('./imgs/weather-icons/37.png'),
  require('./imgs/weather-icons/38.png'),
  require('./imgs/weather-icons/39.png'),
  require('./imgs/weather-icons/40.png'),
  require('./imgs/weather-icons/41.png'),
  require('./imgs/weather-icons/42.png'),
  require('./imgs/weather-icons/43.png'),
  require('./imgs/weather-icons/44.png')
];

class App extends React.Component {

  state = {
    name: undefined,
    area: undefined,
    country: undefined,
    weatherStatus: undefined,
    iconNumber: undefined,
    currentTempF: undefined,
    currentTempC: undefined,
    highTemp: undefined,
    lowTemp: undefined,
    locationKey: undefined
  }

  getWeatherData = async (e) => {
    e.preventDefault();

    const LOCATION = e.target.elements.location.value;
    if (LOCATION) {
      const LOCATION_API_CALL = await fetch(`http://dataservice.accuweather.com/locations/v1/search?apikey=${API_KEY}&q=${LOCATION}`);
      const LOCATION_DATA = await LOCATION_API_CALL.json();
      let resultLocation = LOCATION_DATA[0];
      let locationKey = resultLocation.Key;

      const CURRENT_API_CALL = await fetch(`http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${API_KEY}`);
      const CURRENT_DATA = await CURRENT_API_CALL.json();
      console.log(CURRENT_DATA);
      console.log(CURRENT_DATA[0].WeatherText);
      this.setState({
        weatherStatus: CURRENT_DATA[0].WeatherText,
        iconNumber: CURRENT_DATA[0].WeatherIcon,
        currentTempF: CURRENT_DATA[0].Temperature.Imperial.Value,
        currentTempC: CURRENT_DATA[0].Temperature.Metric.Value
      });

      const FORECAST_API_CALL = await fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${API_KEY}`);
      const FORECAST_DATA = await FORECAST_API_CALL.json();
      // console.log(FORECAST_DATA);
      this.setState({
        name: resultLocation.LocalizedName,
        area: resultLocation.AdministrativeArea.LocalizedName,
        country: resultLocation.Country.LocalizedName,
        highTemp: FORECAST_DATA.DailyForecasts[0].Temperature.Maximum.Value,
        lowTemp: FORECAST_DATA.DailyForecasts[0].Temperature.Minimum.Value,
        locationKey: locationKey,
      });
    }

  }

  render() {
    return (
      <div className="wrapper">
        <div className="main">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12" id="title-container">
                <Title />
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-3" id="form-field">
                <Form weather= { this.getWeatherData } />
              </div>
            </div>
            <div className="row">
              <Weather
                name = { this.state.name }
                area = { this.state.area }
                country = { this.state.country }
                weatherStatus = { this.state.weatherStatus }
                weatherImages = { weatherImages }
                iconNumber = { this.state.iconNumber }
                currentTempF = { this.state.currentTempF }
                currentTempC = { this.state.currentTempC }
                high = { this.state.highTemp }
                low = { this.state.lowTemp }
                locationKey = { this.state.locationKey }
              />
            </div>
          </div>
        </div>
      </div>
    );
	}
}

export default App;