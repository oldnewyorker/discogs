import React from 'react';

import DrawerToggleButton from '..SideDrawer/DrawerToggleButton';
import './Toolbar.css';

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar_navigation">  
            <div>
                <DrawerToggleButton />
            </div>
            <div className="toolbar_logo"><a href="/">THE LOGO</a></div>
            <div className="spacer"/>
            <div className="toolbar_navigation-items">
                <ul>
                    <li><a href="/">Page1</a></li>
                    <li><a href="/">Page2</a></li>
                    <li><a href="/">Page3</a></li>
                    <li><a href="/">Page4</a></li>
                    <li><a href="/">Page5</a></li>
                    <li><a href="/">Page6</a></li>
                    <li><a href="/">Page7</a></li>
                    <li><a href="/">Page8</a></li>

                </ul>
            </div>  
        </nav>
    </header>
);

export default toolbar;