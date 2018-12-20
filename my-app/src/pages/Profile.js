import React, { Component } from 'react';
import ProfileImg from '../img/Profile/Profile.svg';
import BottomNavBar from '../components/BottomNavigation';
import ProfileTabs from '../components/ProfileTabs';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

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
        <ProfileTabs value='My Places' />
        <div>
          
        </div>
        <BottomNavBar value='5' />
      </MuiThemeProvider>
    );
  }
}

export default(Profile);