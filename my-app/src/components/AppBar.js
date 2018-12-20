import React, { Component } from 'react';
import { AppBar, Toolbar, Typography } from "@material-ui/core/";
import Logo from '../img/General/Header.svg';

class MainAppBar extends Component {
  render() {
    return (
          <AppBar position="static" color="default">
            <Toolbar>
              <img className='Center' src={Logo}/>
            </Toolbar>
          </AppBar>
    );
  }
}

export default (MainAppBar);