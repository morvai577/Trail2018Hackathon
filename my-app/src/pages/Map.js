import React, { Component } from 'react';
import AppBar from '../components/AppBar';
import BottomNavBar from '../components/BottomNavigation';

class Map extends Component {

  state = {
    value: 0,
  };

  render() {
    return (
      <div>
        <AppBar />
        <div>
          
        </div>
        <BottomNavBar value='2' />
      </div>
    );
  }
}

export default(Map);