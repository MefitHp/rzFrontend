import React, { Component } from 'react';
import NavBar from './components/common/NavBar';
import HomePage from './components/home/HomePage';


class App extends Component {
  render() {
    return (
        <div>
            <NavBar/>
            <HomePage/>
        </div>
    );
  }
}

export default App;
