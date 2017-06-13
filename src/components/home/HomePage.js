import React from 'react';
import { Link } from 'react-router-dom';
// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
import RaisedButton from 'material-ui/RaisedButton';
import './HomePage.css';
import logo from '../../assets/logo.svg';
import Slide from '../slide/Slide';
import Categoria from '../categoria/Categoria';
import Destacados from '../common/destacados/Destacados';
// import PropTypes from 'prop-types';
import { signOut } from '../../Api/firebase';
import Process from '../process/Process';
import About from '../about/About';
import Contador from '../contador/Contador';
import Footer from '../footer/Footer';
import Comentarios from '../comentarios/Comentarios';
import MainBar from './mainBar/MainBar';
import api from '../../Api/Django';


class HomePage extends React.Component {

    state = {
      destacados:[]
    };

    logout = () => {
        signOut()
            .then(()=>{
                this.props.history.push('/login');
            });
    };

    componentWillMount(){
        api.getAxiosAllProjects()
            .then(

                response => {
                    this.setState({destacados:response.data});
                }
            );
    }

    render() {
        return (
        <div className="App">
            <MainBar/>
            <Slide />
            <About />
        	<Destacados
                destacados={this.state.destacados}
            />
            <Categoria />
            <Comentarios />
            <Process />
            <Contador />

            <Footer />
             
          </div>
        );
    }
}
export default HomePage;

