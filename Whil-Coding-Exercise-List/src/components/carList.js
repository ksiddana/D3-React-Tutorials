import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCar } from '../actions/index';
import Car from './car.js';

class CarList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('CarList', this.props);
    return (
      <div>
      {this.props.cars.length ? this.props.cars.map((key, i, car) => {
        return (
            <Car
              car={car}
              index={i + 1}
            />
        );
      }
    ) : null}
      </div>
      );
  }
}

export default CarList;
