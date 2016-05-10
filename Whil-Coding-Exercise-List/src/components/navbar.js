import React, { Component } from 'react';

class Navbar extends Component {

  constructor(props) {
    super(props);

    this.state = { brand: '' };
  }

  render() {

    if (this.props.color == 'dark') {
      var navClass = 'navbar navbar-inverse';
    } else {
      var navClass = 'navbar navbar-default';
    }

    return (
      <div className="container">
        <nav className={navClass}>
            <div className="">
              <div className="navbar-header">
                <a className="navbar-brand" href="#">{this.props.brand}</a>
              </div>
              <div id="navbar" className="collapse navbar-collapse">
              </div>
            </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
