import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'
import { Grid, Col, Row } from 'react-flexbox-grid'
import LocationList from './components/LocationList'
import './App.css'
import ForecastExtended from '../src/components/ForecastExtended'

const cities = [
  'Caracas, ve,',
  'Barcelona, ve,',
  'Chile, cl,',
  'Kabul, af,',
  'Madrid, es',
  'Buenos Aires, ar',
]

class App extends Component {

    constructor() {
        super()
        this.state = {
            city: null
        }
    }

    handleSelectionLocation = (city) => {
      console.log(`handleSelectionLocation ${city}`)
        this.setState({
            city
        })
    }

    render() {
        const { city } = this.state
      return (
        <Grid>
          <Row>
            <AppBar position="sticky">
              <Toolbar>
                <Typography variant="subtitle1" color="inherit">
                  Weather App
                </Typography>
              </Toolbar>
            </AppBar>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <LocationList
                cities={cities}
                onSelectedLocation={this.handleSelectionLocation}
              />
            </Col>
            <Col xs={12} md={6}>
              <Paper elevation={4}>
                <div className="details" >
                    { city &&
                        <ForecastExtended
                            city={city}
                        />
                    }
                </div>
              </Paper>
            </Col>
          </Row>
        </Grid>

      )
    }
}

export default App
