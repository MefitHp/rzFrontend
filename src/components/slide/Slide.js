import React from 'react';
import './Slide.css';
import video from '../../assets/video.mp4';

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
            </div>
            <video id='bg-video' autoPlay="autoplay" loop  >
              <source src={video} type="video/mp4" />
            </video>
           </div>
        </div>
        );
    }
}

export default Slide;