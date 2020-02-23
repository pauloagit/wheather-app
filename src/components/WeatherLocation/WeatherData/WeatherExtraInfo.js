import React from "react"
import PropType from 'prop-types'
import './styles.css'

const WeatherExtraInfo = ({humidity, wind}) => (
    <div className="weatherExtraInfoCont">
        <span className="extraInfoText">{`Humedad: ${humidity} % - `}</span>
        <span className="extraInfoText">{`Vientos: ${wind}`}</span>
    </div>
)

WeatherExtraInfo.propTypes = {
    humidity: PropType.number.isRequired,
    wind: PropType.string.isRequired
}

export default WeatherExtraInfo
