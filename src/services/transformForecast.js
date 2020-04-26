import moment from 'moment'
import 'moment/locale/es'
import transformWeather from "./transformWeather";

const transformForecast = data => {
    const hours = [8,14,20]
    return data.list.filter(item => (
        hours.includes(moment.unix(item.dt).hour())
    ))
        .map(item => (
        {
            weekDay : moment.unix(item.dt).format('ddd'),
            hour : moment.unix(item.dt).hour(),
            data : transformWeather(item)
        }
        ))
}

export default transformForecast
