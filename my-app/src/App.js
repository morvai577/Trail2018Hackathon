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
import { Link } from "react-router-dom";

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

  componentDidMount() {
    console.log('Will go to node route after 10 seconds');
    // Start counting when the page is loaded
    this.timeoutHandle = setTimeout(() => {
      // Add your logic for the transition
      this.props.history.push('/node')
    }, 10000);
  }

  componentWillUnmount(){
    clearTimeout(this.timeoutHandle); // This is just necessary in the case that the screen is closed before the timeout fires, otherwise it would cause a memory leak that would trigger the transition regardless, breaking the user experience.
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <AppBar />
        <div>
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