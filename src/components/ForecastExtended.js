import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ForecastItem from "./ForecastItem";
import './styles.css'

const days = [
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
}

class ForecastExtended extends Component {

  renderForecastItemDays = () => (
      days.map(day => <ForecastItem key={day} weekDay={day} hour={10} data={data}/>)
  )

  render() {
    const { city } = this.props
    return (
        <div>
          <h2 className='forecast-title'>Pronóstico extendido para {city}</h2>
          {this.renderForecastItemDays()}
        </div>

    )
  }
}

ForecastExtended.propTypes = {
  city: PropTypes.string.isRequired
}

export default ForecastExtended
