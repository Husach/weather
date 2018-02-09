import Base from './Base';
import axios from 'axios';

class Accu extends Base {
  constructor(props) {
    super(props);
    this.state.info = {
      site: 'AccuWeather',
      key: ['y7giraWsK8UoAAAnQiTYQwsIi8qNr1iH', 'O2iwbfFkzf4pQXO6e98n9fOAG6hYKPFy','vqW4avfEBNpN0pI7GIoautnCv30acNw2']
    }
  }

  load(props) {
    axios.get(`http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${this.state.info.key[1]}&q=${props.selected.lat},${props.selected.lng}&language=en&details=true&toplevel=false`)
      .then(({data}) => {
        //console.log(data);
        this.setState({
          data
        })
        axios.get(`http://dataservice.accuweather.com/currentconditions/v1/${this.state.data.Key}?apikey=${this.state.info.key[1]}&language=en&details=true`)
          .then(({data}) => {
            //console.log(data);

            let input = {
              temp: data[0].Temperature.Metric.Value,
              humidity: data[0].RelativeHumidity,
              wind_kph: data[0].Wind.Speed.Metric.Value,
              wind_degree: data[0].Wind.Direction.Degrees,
              description: data[0].WeatherText,
              last_updated: data[0].LocalObservationDateTime.slice(11, 16)
            }

            this.setState({
              data: input
            })
          })
      })
    }

}

export default Accu;
