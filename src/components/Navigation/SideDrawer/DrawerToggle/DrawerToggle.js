import React from 'react';
// import Logo from '../../Logo/Logo'
// import NavigationItems from '../NavigationItems/NavigationItems'

import classes from './DrawerToggle.module.css';

const drawerToggle = (props) => (

    <div className={classes.DrawerToggle} onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>


);

export default drawerToggle;