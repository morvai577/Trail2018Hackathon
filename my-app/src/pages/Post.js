import React, { Component } from 'react';
import AppBar from '../components/AppBar';
import BottomNavBar from '../components/BottomNavigation';

class Post extends Component {

  state = {
    value: 0,
  };

  render() {
    return (
      <div>
        <AppBar />
        <div>
          
        </div>
        <BottomNavBar value='3' />
      </div>
    );
  }
}

export default(Post);