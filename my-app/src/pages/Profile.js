import React, { Component } from 'react';
import AppBar from '../components/AppBar';
import BottomNavBar from '../components/BottomNavigation';

class Profile extends Component {

  state = {
    value: 0,
  };

  render() {
    return (
      <div>
        <AppBar />
        <div>
          
        </div>
        <BottomNavBar value='5' />
      </div>
    );
  }
}

export default(Profile);