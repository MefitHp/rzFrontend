import React from 'react';
import './Btn.css';
import {Link} from 'react-router-dom';


class Slide extends React.Component {

    render() {
        return (
            <div >
                <button className="btn_uno" >{this.props.text}</button>
            </div>
        );
    }
}

export default Slide;/**
 * Created by brendaortega on 03/11/17.
 */
