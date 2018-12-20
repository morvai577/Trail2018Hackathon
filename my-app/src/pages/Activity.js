import React, { Component } from 'react';
import AcivitytTabs from '../components/AcivitytTabs';
import BottomNavBar from '../components/BottomNavigation';
import ActivityThread from '../img/Activity/Activity.svg';

class Activity extends Component {

  state = {
    value: 0,
  };

  render() {
    return (
      <div>
       <AcivitytTabs value='My Places' />
        <div className='MainBody'>
        <div className='MainBodyInner'>
 <img className='Center FullMaxWidth' src={ActivityThread}/>
        </div>
        </div>
        <BottomNavBar value='4' />
      </div>
    );
  }
}

export default(Activity);