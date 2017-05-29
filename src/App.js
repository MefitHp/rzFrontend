import React, { Component } from 'react';
// import NavBar from './components/common/NavBar';
import Routes from './Routes';
// import RoutesDos from './RoutesDos';


class App extends Component {

  render() {
    return (
        <div>
            <Routes handleToggle={this.handleToggle} />

        </div>
    );
  }
}

export default App;
