import Base from './Base';
import axios from 'axios';

class DarkSky extends Base {
  constructor(props) {
    super(props);
    this.state.info = {
      site: 'DarkSky',
      key: '939dc229c7509b7789a1f97739980dff'
    }
  }

  load() {
    axios.get(`https://api.darksky.net/forecast/939dc229c7509b7789a1f97739980dff/37.8267,-122.4233`)
      .then(({data}) => {
        //console.log(data);

        let input = {
          description: data.daily.data.precipType
          // temp: data.currently,
          // humidity: data[0].RelativeHumidity,
          // wind_kph: data[0].Wind.Speed.Metric.Value,
          // wind_degree: data[0].Wind.Direction.Degrees,
          // description: data[0].WeatherText,
          // last_updated: data[0].LocalObservationDateTime
        }

        this.setState({
          data: input
        })
      })
  }
}

export default DarkSky;
