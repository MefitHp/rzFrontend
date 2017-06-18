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
                  <span>Enegía</span>
                  <div className='padre'>
                  <img  src='https://images.pexels.com/photos/45072/pexels-photo-45072.jpeg?w=940&h=650&auto=compress&cs=tinysrgb' alt='Energia'/>
                 </div>
                 </a>
            </li>
           	<li>
              <a href='/'>
                <div className='magnify' ></div>
                <span>Industrias verdes</span>
                <div className='padre'>
                  <img className='verde' src='https://images.pexels.com/photos/48707/pexels-photo-48707.jpeg?w=940&h=650&auto=compress&cs=tinysrgb' alt='Industrias verdes'/>
                </div>
              </a>
            </li>
           	<li>
              <a href='/'>
                <div className='magnify' ></div>
                <span>Industrias creativas</span>
                <div className='padre'>
                <img src='https://images.pexels.com/photos/297648/pexels-photo-297648.jpeg?w=940&h=650&auto=compress&cs=tinysrgb' alt='Industrias creativas'/>
                </div>
              </a>
            </li>
           	<li>
              <a href='/'>
              <div className='magnify' ></div>
              <span>Deporte</span>
              <div className='padre'>
                <img className='verde' src='https://images.pexels.com/photos/261109/pexels-photo-261109.jpeg?w=940&h=650&auto=compress&cs=tinysrgb' alt='Deporte'/>
              </div>
              </a>
            </li>
           	<li>
              <a href='/'><div className='magnify' ></div>
              <span>Educación</span>
              <div className='padre'>
                <img src='https://images.pexels.com/photos/97064/pexels-photo-97064.jpeg?w=940&h=650&auto=compress&cs=tinysrgb' alt='Eduación'/>
              </div>
              </a>
            </li>
            <li>
              <a href='/'>
              <div className='magnify' ></div>
              <span>Agroindustria</span>
              <div className='padre'>
              <img src='https://images.pexels.com/photos/360013/pexels-photo-360013.jpeg?w=940&h=650&auto=compress&cs=tinysrgb' alt='Agroindustria'/>
              </div>
              </a>
            </li>
            <li>
              <a href='/'>
              <div className='magnify' ></div>
              <span>Alimentos</span>
              <div className='padre'>
                <img src='https://images.pexels.com/photos/196643/pexels-photo-196643.jpeg?w=940&h=650&auto=compress&cs=tinysrgb' alt='Alimentos'/>
              </div>
              </a>
            </li>
            <li>
              <a href='/'>
              <div className='magnify' ></div>
              <span>Construcción</span>
              <div className='padre'>
                <img src='https://images.pexels.com/photos/316879/pexels-photo-316879.jpeg?w=940&h=650&auto=compress&cs=tinysrgb' alt='Construcción'/>
              </div>
              </a>
            </li>
            <li>
              <a href='/'>
              <div className='magnify' ></div>
              <span>Movilidad</span>
              <div className='padre'>
                <img src='https://images.pexels.com/photos/31351/pexels-photo-31351.jpg?w=940&h=650&auto=compress&cs=tinysrgb' alt='Movilidad'/>
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