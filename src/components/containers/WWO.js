import Base from './Base';
import axios from 'axios';

class WWU extends Base {
  constructor(props) {
    super(props);
    this.state.info = {
      site: 'WWU',
      key: 'aefaf85fb3af48eb967132405180902'
    }
  }

  load(props) {
    axios.get(`https://api.worldweatheronline.com/premium/v1/weather.ashx?key=${this.state.info.key}&q=${props.selected.lat},${props.selected.lng}&format=json`)
    //axios.get(`https://api.apixu.com/v1/current.json?key=${this.state.info.key}&q=${props.selected.lat},${props.selected.lng}`)
      .then(({data}) => {
        console.log(data);

        let input = {
          temp: data.data.current_condition[0].temp_C,
          humidity: data.data.current_condition[0].humidity,
          wind_kph: data.data.current_condition[0].windspeedKmph,
          wind_degree: data.data.current_condition[0].winddirDegree,
          last_updated: data.data.current_condition[0].observation_time.slice(0,5)
        }
        this.setState({
          data: input
        })
      })
  }
}

export default WWU;
