import React, {Component} from 'react'
import { bindActionCreators } from "redux";
import PropTypes from 'prop-types'
import LocationList from "../components/LocationList"
import {setSelectedCity, setWeather} from "../actions"
import {connect} from "react-redux"
import {getCity, getWeatherCities} from '../reducers'

class LocationListContainer extends Component {

    componentDidMount() {
        const { setWeather, setCity, cities, city } = this.props

        setWeather(cities)
        setCity(city)
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
    setWeather: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
    citiesWeather: PropTypes.array,
    city: PropTypes.string.isRequired,
}

const mapDispatchToProps = dispatch => ({
    setCity: value => dispatch(setSelectedCity(value)),
    setWeather: cities => dispatch(setWeather(cities))
})

const mapStateToProps = state => ({
    citiesWeather: getWeatherCities(state),
    city: getCity(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(LocationListContainer)

