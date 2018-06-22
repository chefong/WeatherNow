import React from "react";
import Title from "./components/Title";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = process.env.REACT_APP_API_KEY;

class App extends React.Component {

  state = {
    name: undefined,
    area: undefined,
    country: undefined,
    highTemp: undefined,
    lowTemp: undefined,
    locationKey: undefined
  }

  getWeatherData = async (e) => {
    e.preventDefault();

    const LOCATION = e.target.elements.location.value;
    const LOCATION_API_CALL = await fetch(`http://dataservice.accuweather.com/locations/v1/search?apikey=${API_KEY}&q=${LOCATION}`);
    const LOCATION_DATA = await LOCATION_API_CALL.json();
    let resultLocation = LOCATION_DATA[0];
    let locationKey = resultLocation.Key;

    const FORECAST_API_CALL = await fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${API_KEY}`);
    const FORECAST_DATA = await FORECAST_API_CALL.json();
    // let temperature = FORECAST_DATA.DailyForecasts[0].Temperature;

    this.setState({
      name: resultLocation.LocalizedName,
      area: resultLocation.AdministrativeArea.LocalizedName,
      country: resultLocation.Country.LocalizedName,
      highTemp: FORECAST_DATA.DailyForecasts[0].Temperature.Maximum.Value,
      lowTemp: FORECAST_DATA.DailyForecasts[0].Temperature.Minimum.Value,
      locationKey: locationKey,
    })

  }

  render() {
    return (
      <div>
        <Title />
        <Form weather={ this.getWeatherData }/>
        <Weather
          name={ this.state.name }
          area={ this.state.area }
          country={ this.state.country }
          high={ this.state.highTemp }
          low={ this.state.lowTemp }
        />
      </div>
    );
	}
}

export default App;