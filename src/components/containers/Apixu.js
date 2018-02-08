import Base from './Base';
import axios from 'axios';

class Apixu extends Base {
  constructor(props) {
    super(props);
    this.state.info = {
      site: 'Apixu',
      key: 'c3b5280810c04994aaa145136180702',
      lat: '49.1',
      lng: '33.42041'
    }
  }

  load() {
    axios.get(`https://api.apixu.com/v1/current.json?key=${this.state.info.key}&q=${this.state.info.lat},${this.state.info.lng}`)
      .then(({data}) => {
        console.log(data);

        let input = {
          name: data.location.name,
          country: data.location.country,
          temp: data.current.temp_c,
          humidity: data.current.humidity,
          wind_kph: data.current.wind_kph,
          wind_degree: data.current.wind_degree,
          last_updated: data.current.last_updated.slice(-5)
        }
        this.setState({
          data: input
        })
      })
  }
}

export default Apixu;
