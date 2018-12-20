import React, { Component } from 'react';
import AcivitytTabs from '../components/AcivitytTabs';
import BottomNavBar from '../components/BottomNavigation';
import ActivityThread from '../img/Activity/Activity.svg';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
  palette: {
    primary: { main: '#2196F3' },
    secondary: { main: '#FFC107' }, 
  },
});

class Activity extends Component {

  state = {
    value: 0,
  };

  render() {
    return (
      <MuiThemeProvider theme={theme}>
       <AcivitytTabs value='My Places' />
        <div className='MainBody'>
        <div className='MainBodyInner'>
 <img className='Center FullMaxWidth' src={ActivityThread}/>
        </div>
        </div>
        <BottomNavBar value='4' />
      </MuiThemeProvider>
    );
  }
}

export default(Activity);