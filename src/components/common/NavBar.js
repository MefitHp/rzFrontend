/**
 * Created by BlisS on 22/03/17.
 */
import React from 'react';
import AppBar from 'material-ui/AppBar';



const NavBar = (...props) => {
    return (
        <div>
            <AppBar
                title="Reto Zapopan"
                iconClassNameRight="muidocs-icon-navigation-expand-more"
            />
        </div>
    );
};

NavBar.propTypes = {};

export default NavBar;
