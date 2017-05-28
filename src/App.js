import React, { Component } from 'react';
import NavBar from './components/common/NavBar';
import Routes from './Routes';
import RoutesDos from './RoutesDos';


class App extends Component {
    state = {
        open: true
    };

    handleToggle = () => {
      this.setState({
          open: !this.state.open
      });
    };

  render() {
    return (
        <div>
            <NavBar open={this.state.open} handleToggle={this.handleToggle}/>
            <div style={this.state.open ? {paddingLeft:200, transition:'all 1s ease'} : {transition:'all .3s ease'}}>
                <Routes handleToggle={this.handleToggle} />
            </div>
            <RoutesDos />

        </div>
    );
  }
}

export default App;
