import React, { Component } from 'react';
import ProfileImg from '../img/Profile/Profile.svg';
import BottomNavBar from '../components/BottomNavigation';
import ProfileTabs from '../components/ProfileTabs';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import ProfileThread from '../img/Profile/Posts.svg';
import ProfileShop from '../img/Profile/Emojis.svg';
import ProfileMap from '../img/Profile/Map.png';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#2196F3' },
    secondary: { main: '#FFC107' }, 
  },
});


class Profile extends Component {

  state = {
    value: 0,
  };

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <img src={ProfileImg} />
        <ProfileTabs value='My Posts' />
        <div className='MainBody Profile'>
         
          <div id='MyPosts' className='ProfileTab'>
            <div className='MainBodyInner'>
            <img className='Center FullMaxWidth' src={ProfileThread} />
            </div>
          </div>
          <div id='MyPlaces' hidden className='ProfileTab'>
          <img src={ProfileMap} />
          </div>
          <div id='Shop' hidden className='ProfileTab'>
          <div className='MainBodyInner'>
            <img className='Center FullMaxWidth' src={ProfileShop} />
            </div>
          </div>
       
        </div>
        <BottomNavBar value='5' />
      </MuiThemeProvider>
    );
  }
}

export default(Profile);