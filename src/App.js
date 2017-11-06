import React, { Component } from 'react';
// import NavBar from './components/common/NavBar';
import Routes from './Routes';
import ListingNavBar from './components/projectListing/ListingNavBar';
import AppBar from 'material-ui/AppBar';
// import RoutesDos from './RoutesDos';


export class App extends Component {
    state = {
        ancho: document.documentElement.clientWidth < 600
    };
    render() {
        const {barra} = this.state;
        return (
            <div>
                <ListingNavBar/>
                <Routes handleToggle={this.handleToggle} />
            </div>
        );
    }
}

const MiniNav = () => (
    <AppBar
        title="Explorar"
        iconElementLeft={<span></span>}
    />
);

export default App;
