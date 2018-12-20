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
          <h1>Post</h1>
        </div>
        <BottomNavBar value='3' />
      </div>
    );
  }
}

export default(Post);