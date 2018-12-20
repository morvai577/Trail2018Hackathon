import React, { Component } from 'react';
import BottomNavBar from '../components/BottomNavigation';
import MapBackground from '../img/Map/Map.png';
import Search from '../img/Map/Search.svg';

class Map extends Component {

  state = {
    value: 0,
  };

  render() {
    return (
      <div>
        <div className='MainBody alt'>
        <div className='Fixed'>
          <img className='Center FullMaxWidth' src={Search} />
        </div>
          <img className='Center' src={MapBackground}/>
        </div>
        <BottomNavBar value='2' />
      </div>
    );
  }
}

export default(Map);