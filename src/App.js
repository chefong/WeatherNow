import React from "react";
import Title from "./components/Title";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = process.env.REACT_APP_API_KEY;

class App extends React.Component {

  getWeatherData = async (e) => {
    e.preventDefault();

    const LOCATION = e.target.elements.location.value;

    const LOCATION_API_CALL = await fetch(`http://dataservice.accuweather.com/locations/v1/search?apikey=${API_KEY}&q=${LOCATION}`);
    const LOCATION_DATA = await LOCATION_API_CALL.json();

    // console.log(WEATHER_DATA);
    let result = LOCATION_DATA[0];
    let locationKey = result.Key;
    console.log(locationKey);
  }

  render() {
    return (
      <div>
        <Title />
        <Form weather={ this.getWeatherData }/>
        <Weather />
      </div>
    );
	}
}

export default App;