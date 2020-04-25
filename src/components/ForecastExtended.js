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

    componentDidMount() {
        const { city } = this.props
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

    renderForecastItemDays = () => {
      return <h1>Render Items</h1>
      // days.map(day => <ForecastItem key={day} weekDay={day} hour={10} data={data}/>)
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
              this.renderForecastItemDays():
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
