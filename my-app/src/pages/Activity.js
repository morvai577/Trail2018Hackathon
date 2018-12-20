import React, { Component } from 'react';
import AppBar from '../components/AppBar';
import BottomNavBar from '../components/BottomNavigation';

class Activity extends Component {

  state = {
    value: 0,
  };

  render() {
    return (
      <div>
        <AppBar />
        <div>
          
        </div>
        <BottomNavBar value='4' />
      </div>
    );
  }
}

export default(Activity);