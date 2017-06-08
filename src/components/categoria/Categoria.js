import React from 'react';
import './Categoria.css';

class Categoria extends React.Component {

    render() {
        return (

          <div className='away '>
         <h3 style={{marginTop:0}} className='tittle'> Categorias </h3>
        <div className='container'>
           

           <ul id='flex-container'>

           	<li> 
                <a href='/'>
                  <div className='magnify' ></div>
                  <span>Tecnologia</span>
                  <div className='padre'>
                  <img  src='https://images.pexels.com/photos/209151/pexels-photo-209151.jpeg?w=940&h=650&auto=compress&cs=tinysrgb' alt='Tecnologia'/>
                 </div>
                 </a>
            </li>
           	<li>
              <a href='/'>
                <div className='magnify' ></div>
                <span>Educacion</span>
                <div className='padre'>
                  <img className='verde' src='https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?w=940&h=650&auto=compress&cs=tinysrgb' alt='Educacion'/>
                </div>
              </a>
            </li>
           	<li>
              <a href='/'>
                <div className='magnify' ></div>
                <span>Arte</span>
                <div className='padre'>
                <img src='https://images.pexels.com/photos/89860/pexels-photo-89860.jpeg?w=940&h=650&auto=compress&cs=tinysrgb' alt='Arte'/>
                </div>
              </a>
            </li>
           	<li>
              <a href='/'>
              <div className='magnify' ></div>
              <span>Diseno</span>
              <div className='padre'>
                <img className='verde' src='https://images.pexels.com/photos/108044/pexels-photo-108044.jpeg?w=940&h=650&auto=compress&cs=tinysrgb' alt='Diseno'/>
              </div>
              </a>
            </li>
           	<li>
              <a href='/'><div className='magnify' ></div>
              <span>Alimentos</span>
              <div className='padre'>
                <img src='https://images.pexels.com/photos/8279/muffin.jpg?w=940&h=650&auto=compress&cs=tinysrgb' alt='Alimentos'/>
              </div>
              </a>
            </li>
            <li>
              <a href='/'>
              <div className='magnify' ></div>
              <span>Cultura</span>
              <div className='padre'>
              <img src='https://images.pexels.com/photos/108995/pexels-photo-108995.jpeg?w=940&h=650&auto=compress&cs=tinysrgb' alt='Cultura'/>
              </div>
              </a>
            </li>
            <li>
              <a href='/'>
              <div className='magnify' ></div>
              <span>Comunidad</span>
              <div className='padre'>
                <img src='https://images.pexels.com/photos/27411/pexels-photo-27411.jpg?w=940&h=650&auto=compress&cs=tinysrgb' alt='Comunidad'/>
              </div>
              </a>
            </li>
            <li>
              <a href='/'>
              <div className='magnify' ></div>
              <span>Sociedad</span>
              <div className='padre'>
                <img src='https://images.pexels.com/photos/129859/pexels-photo-129859.jpeg?w=940&h=650&auto=compress&cs=tinysrgb' alt='Sociedad'/>
              </div>
              </a>
            </li>
            <li>
              <a href='/'>
              <div className='magnify' ></div>
              <span>Medio Ambiente</span>
              <div className='padre'>
                <img src='https://images.pexels.com/photos/158607/cairn-fog-mystical-background-158607.jpeg?w=940&h=650&auto=compress&cs=tinysrgb' alt='Medio ambiente'/>
              </div>
              </a>
            </li>
           </ul>
        </div>
        </div>
        );
    }
}

export default Categoria;