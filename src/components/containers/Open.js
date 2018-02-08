import Base from './Base';
import axios from 'axios';

class Open extends Base {
  constructor(props) {
    super(props);
    this.state.info = {
      site: 'OpenWeather',
      key: '5fbf2d5bb1ffe0f4f72cacb24232754b',  //key: 'ff4c359a0daebb85920ed39af4b4ca20'
      lat: 49.1,
      lng: 33.42041
    }
  }

    load() {    
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.info.lat}&lon=${this.state.info.lng}&APPID=${this.state.info.key}&units=metric`)
      .then(({data}) => {
        //console.log(data);

        let input = {
          name: data.name,
          country: data.sys.country,
          temp: data.main.temp,
          humidity: data.main.humidity,
          wind_mps: data.wind.speed,
          wind_degree: data.wind.deg,
          description: data.weather[0].description
        }

        this.setState({
          data: input
        })
      })
  }
}

export default Open;
