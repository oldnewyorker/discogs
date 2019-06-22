import React from 'react';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar_navigation">  
            <div>
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
            <div className="toolbar_logo"><a href="/">THE LOGO</a></div>
            <div className="spacer"/>
            <div className="toolbar_navigation-items">
                <ul>
                    <li><a href="/">Log In</a></li>
                    <li><a href="/">Sign Up</a></li>
                </ul>
            </div>  
        </nav>
    </header>
);

export default toolbar;