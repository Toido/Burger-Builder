import React, { Component } from 'react';
import Aux from '../Auxillary/Auxillary';
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state ={
        showSideDrawer: false
    }

    closeSideDrawerHandler = () => {
        this.setState ({
            showSideDrawer: false
        })
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer}
        });
    }
    
    render () {
        return(
            <Aux>
                <div>
                    <Toolbar 
                        shown = {this.state.showSideDrawer}
                        sideDrawerToggle = {this.sideDrawerToggleHandler}/>
                    <SideDrawer 
                        shown = {this.state.showSideDrawer}
                        close = {this.closeSideDrawerHandler}/>
                </div>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout;