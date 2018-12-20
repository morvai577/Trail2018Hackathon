import React, { Component } from 'react';
import BottomNavBar from '../components/BottomNavigation';
import Enter from '../img/Node/Enter.svg';
import Compass from '../img/Node/Compass-Text-Alt.svg';
import CompassBg from '../img/Node/CompassBg-Alt.svg';
import Coin from '../img/Node/Coin.svg';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import AppBar from '../components/AppBar';


const theme = createMuiTheme({
  palette: {
    primary: { main: '#2196F3' },
    secondary: { main: '#FFC107' }, 
  },
});

class Node extends Component {

  state = {
    value: 0,
  };

  async handleClick(e) {
    let path = `https://dazzling-beaver-5ca368.netlify.com/`;
    window.location.href = path;
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className='MainBody'>
          <img className="Center FullMaxWidth Compass" src={Compass}/>
          <img className="Center FullMaxWidth Enter" src={Enter} onClick={ event => this.handleClick(event)}/>
          <img className='Center BgImg _compass' src={CompassBg} /> 
        </div>
        <BottomNavBar value='1' />
      </MuiThemeProvider>
    );
  }
}


export default Node;