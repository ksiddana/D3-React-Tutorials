import React, { Component } from 'react';

class Car extends Component {
  constructor(props) {
    super(props);
    console.log('Car Component:', this.props);
  }

  render() {
    return (
      <div className="car">
        <p>Car {this.props.index}</p>
      </div>
    );
  }
}

export default Car;
