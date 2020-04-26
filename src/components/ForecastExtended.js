import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ForecastItem from "./ForecastItem";
import getUrlForecastByCity from '../services/getUrlForecastByCity'
import transformForecast from '../services/transformForecast'
import './styles.css'

/*const days = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
]

const data = {
    temperature: 10,
    weatherState: 'normal',
    humidity: 10,
    wind: 'normal',
}*/

class ForecastExtended extends Component {

    constructor() {
        super();
        this.state = {
            forecastData: null
        }
    }

    updateCity = city => {
        const url_forecast = getUrlForecastByCity(city)

        fetch(url_forecast).then(
            data => data.json()
        ).then(
            weather_data => {
                console.log(weather_data)
                const forecastData = transformForecast(weather_data)
                console.log('forecastData', forecastData)
                this.setState({forecastData})
            }
        )
    }

    componentDidMount() {
        const { city } = this.props
        this.updateCity(city)
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.city !== this.props.city){
            this.setState({forecastData:null})
            this.updateCity(nextProps.city)
        }
    }

    renderForecastItemDays = (forecastData) => {
        return forecastData.map( forecast => (
            <ForecastItem key={`${forecast.weekDay}${forecast.hour}`} weekDay={forecast.weekDay} hour={forecast.hour} data={forecast.data}/>
        ))
  }

    renderProgress = () => {
        return <h3>Cargando Pronóstico extendido...</h3>
    }

  render() {
    const { city } = this.props
    const { forecastData } = this.state
    return (
        <div>
          <h2 className='forecast-title'>Pronóstico extendido para {city}</h2>
          { forecastData ?
              this.renderForecastItemDays(forecastData):
              this.renderProgress()
            }
        </div>

    )
  }
}

ForecastExtended.propTypes = {
  city: PropTypes.string.isRequired
}

export default ForecastExtended
