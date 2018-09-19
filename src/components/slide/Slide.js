import React from 'react';
import './Slide.css';
<<<<<<< HEAD
import video from '../../assets/video.mp4';
=======
>>>>>>> a78d8de88724608a045d4ba9cfe8e7e0e642e89b
import RaisedButton from 'material-ui/RaisedButton';
import Contador from '../contador/Contador';
import {Link} from 'react-router-dom';


class Slide extends React.Component {

    render() {
        return (
        <div className='fondo'>
          <div className='back'>
            <div className='degradado'>
              <div className='text'>
           		 <h1 >Crowdfunding Zapopan</h1>
           		 <p > El lugar para hacer realidad tus ideas</p>
              </div>
               <Link
                        id="explorar"
                        to="/explorar" >
                   <button className="btn_uno" >Explorar</button>
              </Link>
              <Contador />
            </div>

            <video id='bg-video' autoPlay="autoplay" loop  >
<<<<<<< HEAD
              <source src={video} type="video/mp4" />
=======
>>>>>>> a78d8de88724608a045d4ba9cfe8e7e0e642e89b
            </video>
           </div>
        </div>
        );
    }
}

export default Slide;