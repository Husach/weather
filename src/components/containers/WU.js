import Base from './Base';
import axios from 'axios';

class WU extends Base {
  constructor(props) {
    super(props);
    this.state.info = {
      site: 'WeatherUndeground',
      key: '055b0e18b78261f4',
      name: 'Kiev'
    }
  }

  load() {
    axios.get(`http://api.wunderground.com/api/${this.state.info.key}/conditions/q/CA/${this.state.info.name}.json`)
      .then(({data}) => {
        //console.log(data);

        let input = {
          temp: data.current_observation.temp_c,
          humidity: data.current_observation.relative_humidity.slice(0, 2),
          wind_kph: data.current_observation.wind_kph,
          description: data.current_observation.icon,
          last_updated: data.current_observation.observation_time_rfc822.slice(17, 22)
        }
        this.setState({
          data: input
        })
      })
  }
}

export default WU;
