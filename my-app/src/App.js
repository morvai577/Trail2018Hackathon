import React, { Component } from 'react';
import './App.css';
import { withStyles } from '@material-ui/core/styles';
import Compass from './components/Compass';
import PropTypes from 'prop-types';
import AppBar from './components/AppBar';
import BottomNavBar from './components/BottomNavigation';
import { Paper } from '@material-ui/core';
import SponsorImg from './img/Compass/Sponsord.svg'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const styles = {
  root: {
    
  },
};

const theme = createMuiTheme({
  palette: {
    primary: { main: '#2196F3' },
    secondary: { main: '#FFC107' }, 
  },
});


class App extends Component {

  state = {
    value: 0,
  };

  async handleClick(e) {
    let path = `/node`;
    this.props.history.push(path);
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <AppBar/>
        <div onClick={ event => this.handleClick(event)}>
          <Compass/>
        </div>
        <Paper className='SponsorDiv'>
          <img src={SponsorImg}/>
        </Paper>
        <BottomNavBar value='1' />
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);