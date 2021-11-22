import React , {Component} from 'react';
import Form from './components/Form';
import Weather from './components/Weather';
// http://api.openweathermap.org/data/2.5/weather?q=cairo%2Cegypt&appid=e36ed364400282e43250b6c4c0274d44

const API_KEY = "80d764af8822910f0798bb2dd16290fa";
class App extends Component {
  state = {
    tempetature: '',
    city: '',
    country: '',
    humidity: '',
    description: '',
    error: ''
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}%2C${country}&appid=${API_KEY}`)
    const data = await api.json();
    if(city && country) {
      this.setState({
        tempetature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ''
      })
    } else {
      this.setState({
        tempetature: '',
        city: '',
        country: '',
        humidity: '',
        description: '',
        error: 'Please Enter Data'
      })
    }
  }
  render() {
    return (
      <div className="wrapper">
        <div className="form-container">
          <Form getWeather={this.getWeather} />
          <Weather
            tempetature={this.state.tempetature}
            city={this.state.city}
            country={this.state.country}
            humidity={this.state.humidity}
            description={this.state.description}
            error={this.state.error}
          />
        </div>
      </div>
    );
  }
}

export default App;
