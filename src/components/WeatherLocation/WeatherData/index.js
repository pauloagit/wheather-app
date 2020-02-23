import React from "react"
import PropType from 'prop-types'
import WeatherExtraInfo from "./WeatherExtraInfo";
import WeatherTemperature from "./WeatherTemperature";
import './styles.css'

const WeatherData = ({data: {temperature, weatherState, humidity, wind}}) => (
        <div className="weatherDataCont">
            <WeatherTemperature
                temperature = {temperature}
                weatherState={weatherState}
            />
            <WeatherExtraInfo
                humidity={humidity}
                wind={wind}
            />
        </div>
    )


WeatherData.propTypes = {
    data: PropType.shape({
            temperature: PropType.number.isRequired,
            weatherState: PropType.string.isRequired,
            humidity: PropType.number.isRequired,
            wind: PropType.string.isRequired
        }),
}

export default WeatherData
