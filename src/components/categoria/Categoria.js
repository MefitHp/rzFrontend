import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import './Categoria.css';

class Categoria extends React.Component {

    render() {
        return (
        <div className='container'>
           <ul id='flex-container'>
           	<li><a href='#'><div className='magnify' ></div><span>Tecnologia</span><img src='https://images.pexels.com/photos/163125/board-printed-circuit-board-computer-electronics-163125.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'/></a></li>
           	<li><a href='#'><div className='magnify' ></div><span>Educacion</span><img src='https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'/></a></li>
           	<li><a href='#'><div className='magnify' ></div><span>Cultura</span><img src='https://images.pexels.com/photos/89860/pexels-photo-89860.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'/></a></li>
           	<li><a href='#'><div className='magnify' ></div><span>Sociedad</span><img src='https://images.pexels.com/photos/27411/pexels-photo-27411.jpg?w=940&h=650&auto=compress&cs=tinysrgb'/></a></li>
           	<li><a href='#'><div className='magnify' ></div><span>Medio Ambiente</span><img src='https://images.pexels.com/photos/158607/cairn-fog-mystical-background-158607.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'/></a></li>

           </ul>
        </div>
        );
    }
}

export default Categoria;