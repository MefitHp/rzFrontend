/**
 * Created by BlisS on 22/03/17.
 */
import React from 'react';
import LaBarra from '../laBarra/LaBarra';


class NavBar extends React.Component {
    
        state = {
            open: false,
            image:'',

        }
    
    render(){
        return (
            <div>
                <LaBarra history={this.props.history} />
            </div>
        );
    }

}

export default NavBar;
