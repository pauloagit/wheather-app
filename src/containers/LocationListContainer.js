import React, {Component} from 'react'
import PropTypes from 'prop-types'
import LocationList from "../components/LocationList"
import {setSelectedCity, setWeather} from "../actions"
import {connect} from "react-redux"
import {getWeatherCities} from '../reducers'

class LocationListContainer extends Component {

    componentDidMount() {
        const { cities } = this.props
        this.props.setWeather(cities)
    }

    handleSelectionLocation = (city) => {
        this.props.setCity(city)
    }

    render() {
        const { citiesWeather } = this.props
        return (
            <LocationList
                cities={citiesWeather}
                onSelectedLocation={this.handleSelectionLocation}
            />
        )
    }
}

LocationListContainer.propTypes = {
    setCity: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
    citiesWeather: PropTypes.array,
}

const mapDispatchToProps = dispatch => ({
    setCity: value => dispatch(setSelectedCity(value)),
    setWeather: cities => dispatch(setWeather(cities))
})

const mapStateToProps = state => ({citiesWeather: getWeatherCities(state)})

export default connect(mapStateToProps, mapDispatchToProps)(LocationListContainer)

