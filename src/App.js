import React, {Component} from 'react';
import './App.css';
import LocationList from "./components/LocationList";

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
            <div className="App">
                <LocationList
                    cities = {cities}
                    onSelectedLocation = {this.handleSelectionLocation}
                />
            </div>

        )
    }


}

export default App
