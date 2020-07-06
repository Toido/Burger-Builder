import React from 'react';
import classes from './SideDrawerToggle.module.css';
import Aux from '../../../../hoc/Auxillary/Auxillary';

const menu = (props) => (
    <Aux>
        <div className={classes.DrawerToggle} onClick={props.handler}>
            <div/>
            <div/>
            <div/>
        </div>
    </Aux>
);

export default menu;