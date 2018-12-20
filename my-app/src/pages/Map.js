import React, { Component } from 'react';
import BottomNavBar from '../components/BottomNavigation';
import MapBackground from '../img/Map/Map.png';
import Search from '../img/Map/Search.svg';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#2196F3' },
    secondary: { main: '#FFC107' }, 
  },
});

class Map extends Component {

  state = {
    value: 0,
  };

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className='MainBody alt'>
        <div className='Fixed'>
          <img className='Center FullMaxWidth' src={Search} />
        </div>
          <img className='Center' src={MapBackground}/>
        </div>
        <BottomNavBar value='2' />
      </MuiThemeProvider>
    );
  }
}

export default(Map);