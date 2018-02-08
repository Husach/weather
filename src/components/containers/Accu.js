import Base from './Base';
import axios from 'axios';

class Accu extends Base {
  constructor(props) {
    super(props);
    this.state.info = {
      site: 'AccuWeather',
      key: 'O2iwbfFkzf4pQXO6e98n9fOAG6hYKPFy',     //'vqW4avfEBNpN0pI7GIoautnCv30acNw2',
      cityId: 324505
    }
  }

  load() {
    axios.get(`http://dataservice.accuweather.com/currentconditions/v1/${this.state.info.cityId}?apikey=${this.state.info.key}&language=en&details=true`)
      .then(({data}) => {
        //console.log(data);

        let input = {
          temp: data[0].Temperature.Metric.Value,
          humidity: data[0].RelativeHumidity,
          wind_kph: data[0].Wind.Speed.Metric.Value,
          wind_degree: data[0].Wind.Direction.Degrees,
          description: data[0].WeatherText,
          last_updated: data[0].LocalObservationDateTime
        }

        this.setState({
          data: input
        })
      })
  }
}

export default Accu;
