import React, {Component} from "react"
import Location from "./Location";
import WeatherData from "./WeatherData";
import './styles.css'
import {
    SUN,
    WINDY
} from "../../constants/weathers";

const data = {
    temperature: 5,
    weatherState: SUN,
    humidity: 10,
    wind: '10 m/s'
}

const data2 = {
    temperature: 20,
    weatherState: WINDY,
    humidity: 15,
    wind: '25 m/s'
}

class WeatherLocation extends Component {

    constructor() {
        super()
        this.state = {
            city: 'Barcelona',
            data: data,
        }
    }

    handleUpdateClick = () => {
        this.setState({
            data: data2,
        })
    }

    render() {
        const {city, data} = this.state
        return (
            <div className="weatherLocationCont">
                <Location
                    city = {city}
                />
                <WeatherData
                    data={data}
                />

                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
        )
    }
}

export default WeatherLocation
