import React, { Component } from 'react';
// import NavBar from './components/common/NavBar';
import Routes from './Routes';
import ListingNavBar from './components/projectListing/ListingNavBar';
import AppBar from 'material-ui/AppBar';
// import RoutesDos from './RoutesDos';
<<<<<<< HEAD

=======
import Footer from './components/footer/Footer';
>>>>>>> a78d8de88724608a045d4ba9cfe8e7e0e642e89b

export class App extends Component {
    state = {
        ancho: document.documentElement.clientWidth < 600,
<<<<<<< HEAD
        user: null
    };

    render() {
        const { barra } = this.state;
=======
        user:null
    };

    render() {
        const {barra} = this.state;
>>>>>>> a78d8de88724608a045d4ba9cfe8e7e0e642e89b
        return (
            <div>
                {/*<ListingNavBar />*/}
                <Routes />
<<<<<<< HEAD
=======
                <Footer />
>>>>>>> a78d8de88724608a045d4ba9cfe8e7e0e642e89b
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
