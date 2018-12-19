import React, { Component } from 'react';
import './App.css';
import { withStyles } from '@material-ui/core/styles';
import Compass from './components/Compass';
import PropTypes from 'prop-types';
import AppBar from './components/AppBar';
import BottomNavBar from './components/BottomNavigation';

const styles = {
  root: {
    
  },
};

class App extends Component {

  state = {
    value: 0,
  };

  render() {
    return (
      <div>
        <AppBar />
        <div>
          <Compass/>
        </div>
        <BottomNavBar value='1' />
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);