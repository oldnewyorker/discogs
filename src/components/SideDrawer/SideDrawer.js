import React from 'react';

import './SideDrawer.css';

const sideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses =  'side-drawer open';
    }
   return (
        <nav className={drawerClasses}>
        <ul>
            <li><a href="/">PageOne</a></li>
            <li><a href="/">PageTwo</a></li>
            <li><a href="/">PageThree</a></li>
            <li><a href="/">PageFour</a></li>
            <li><a href="/">PageFive</a></li>
        </ul>
    </nav>
   );
};

export default sideDrawer;