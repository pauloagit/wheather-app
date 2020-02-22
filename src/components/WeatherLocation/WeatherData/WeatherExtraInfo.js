import React from "react"
import PropType from 'prop-types'
import './styles.css'

const WeatherExtraInfo = ({humidity, wind}) => (
    <div className="weatherExtraInfoCont">
        <span>{`${humidity} % - `}</span>
        <span>{`${wind} viento`}</span>
    </div>
)

WeatherExtraInfo.propTypes = {
    humidity: PropType.number.isRequired,
    wind: PropType.string.isRequired
}

export default WeatherExtraInfo
