import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ForecastExtended from "../components/ForecastExtended"
import { connect } from 'react-redux'

class ForecastExtendedContainer extends Component {
    render() {
        const { city, forecastData } = this.props
        return (
            city &&
            <ForecastExtended
                city={city}
                forecastData={forecastData}
            />
        )
    }
}

ForecastExtendedContainer.propTypes = {
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.array,
}

// const mapStateToProps = state => ({ city: state.city}) // Igual linea 21
const mapStateToProps = ({ city, cities }) => ({ city, forecastData: cities[city] && cities[city].forecastData})

export default connect(mapStateToProps, null)(ForecastExtendedContainer)
