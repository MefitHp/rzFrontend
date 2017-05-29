import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import './Slide.css';

class Slide extends React.Component {

    render() {
        return (
        <div className='fondo'>
          <div className='back'>
           <div className='text'>
           		<h1 >Crowdfunding Zapopan</h1>
           		<p > El lugar para hacer realidad tus ideas</p>
           </div>
           </div>
        </div>
        );
    }
}

export default Slide;