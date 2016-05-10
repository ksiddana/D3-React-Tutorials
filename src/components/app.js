import React from 'react';
import { Component } from 'react';
import Navbar from './navbar.js';
import CarList from './carList.js';
import AppActions from '../actions/index.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalCars: [],
      carWash: [],
      smogCheck: [],
      repair: [],
      chosen: undefined,
    };

    this.addCar = this.addCar.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  addCar(e, value) {
    e.preventDefault();
    if (value === 'Car Wash' && this.state.carWash.length < 5) {
      this.setState({ carWash: this.state.carWash.concat([value]) });
      this.setState({ totalCars: this.state.totalCars.concat([1]) });
    }

    if (value === 'Smog Check' && this.state.smogCheck.length < 5) {
      this.setState({ smogCheck: this.state.smogCheck.concat([value]) });
      this.setState({ totalCars: this.state.totalCars.concat([1]) });
    }

    if (value === 'Repair' && this.state.repair.length < 5) {
      this.setState({ repair: this.state.repair.concat([value]) });
      this.setState({ totalCars: this.state.totalCars.concat([1]) });
    } else {

      this.setState({ totalCars: this.state.totalCars.concat([1]) });
    }

  }

  handleChange(e, value) {
    e.preventDefault();
    this.setState({ chosen: value });
  }

  render() {
    console.log(this.state);
    return (
      <div className="main-content">

        <Navbar brand='Shiny Car Wash Services'/>

        <form className="interface" onSubmit={e => this.addCar(e, this.state.chosen)}>
          <input type='radio' name='Car Wash' value='Car Wash' checked={this.state.chosne === 'Car Wash'} onChange={e => this.handleChange(e, 'Car Wash')}/> Car Wash
          <input type="radio" onChange={e => this.handleChange(e, 'Smog Check')} value='Smog Check'/> Smog Check
          <input type="radio" onChange={e => this.handleChange(e, 'Repair')} value='Repair'/> Repair
          <input type="submit" value='New Car' />
        </form>

        <div className="total">
            <p>Total Cars: {this.state.totalCars.length}</p>
        </div>

        <div className="col-xs-3">
          <h5>Repair</h5>
          <CarList
            cars={this.state.repair}
            serviceType='Repair Services'
          />
        </div>

        <div className="col-xs-3">
          <h5>Car Wash</h5>
          <CarList
          cars={this.state.carWash}
          serviceType='Car Wash'
          />
        </div>

        <div className="col-xs-3">
          <h5>Smog Check</h5>
          <CarList
            cars={this.state.smogCheck}
            serviceType='Smog Check'
          />
        </div>

        <div className="col-xs-3">
          <h5>Queue</h5>
          <CarList
            cars={this.state.totalCars}
          />
        </div>

      </div>
    );
  }
}

export default App;
