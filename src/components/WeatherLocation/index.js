import React, {Component} from "react"
import Location from "./Location"
import transformWeather from "../../services/transformWeather";
import WeatherData from "./WeatherData"
import './styles.css'
import {
    SUN,
    WINDY
} from "../../constants/weathers"
import {api_weather} from '../../constants/api_url'


const data = {
    temperature: 5,
    weatherState: SUN,
    humidity: 10,
    wind: '10 m/s'
}


class WeatherLocation extends Component {

    constructor() {
        super()
        this.state = {
            city: 'Barcelona',
            data: data,
        }
        console.log("constructor")
    }

    componentDidMount() {
        console.log("componentDidMount")
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate")
    }

    componentWillMount() {
        console.log("UNSAFE componentWillMount")
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log("UNSAFE componentWillUpdate")
    }

    handleUpdateClick = () => {

        fetch(api_weather).then( resolve => {
            return resolve.json()
        }).then(data =>{
            const newWeather = transformWeather(data)
            this.setState({
                data: newWeather,
            })
        })

    }

    render() {
        console.log("render")
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
