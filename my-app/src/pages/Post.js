import React, { Component } from 'react';
import PostImg from '../img/Post/Post.svg';
import BottomNavBar from '../components/BottomNavigation';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#2196F3' },
    secondary: { main: '#FFC107' }, 
  },
});

class Post extends Component {

  state = {
    value: 0,
  };

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div>
         <img className='Center FullMaxWidth' src={PostImg}/>
        </div>
        <BottomNavBar value='3' />
      </MuiThemeProvider>
    );
  }
}

export default(Post);