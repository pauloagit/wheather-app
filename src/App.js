import React, {Component} from 'react';
import { Grid, Col, Row } from "react-flexbox-grid";
import LocationList from "./components/LocationList";
import './App.css';

const cities = [
    'Caracas, ve,',
    'Barcelona, ve,',
    'Chile, cl,',
    'Kabul, af,',
    'Madrid, es',
    'Buenos Aires, ar'
]

class App extends Component {

    handleSelectionLocation = city => {
        console.log(`handleSelectionLocation ${city}`)
    }

    render() {
        return (
            <Grid>
                <Row>
                    Titulo
                </Row>
                <Row>
                    <Col xs={12} md={6}>
                        <LocationList
                            cities = {cities}
                            onSelectedLocation = {this.handleSelectionLocation}
                        />
                    </Col>
                    <Col xs={12} md={6}>
                        <div className="details"></div>
                    </Col>
                </Row>
            </Grid>

        )
    }


}

export default App
