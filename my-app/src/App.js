import React, { Component } from 'react';
import { Link, Route, BrowserRouter, Switch } from "react-router-dom";
import { AppBar, Toolbar, Typography, BottomNavigation } from "@material-ui/core/";
import './App.css';
import { withStyles } from '@material-ui/core/styles';
import Compass from './components/Compass';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HomeIcon from '@material-ui/icons/Home';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AddBoxRoundedIcon from '@material-ui/icons/AddBoxRounded';
import BookmarkIcon from '@material-ui/icons/Bookmark';

const styles = {
  root: {
    flexGrow: 1,
    maxWidth: 500,
    backgroundColor: '#2BCF8B',
    bottom: 0
  },

  tab: {
    color: 'white'
  },

};

function AppContainer({ children }) {
  return (
      {children}
  );
}

class App extends Component {

  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {

    const { classes } = this.props;

    return (
      <div>
        <div>
          {/* Green Appbar with the title of the app*/}
          <AppBar position="static" style={{ backgroundColor: "#2BCF8B" }}>
            <Toolbar>
              <Typography variant="title" color="inherit">
                Wonder
              </Typography>
            </Toolbar>
          </AppBar>
        </div>
        <div>
          <Compass/>
        </div>
        <div style={{position: 'fixed', bottom: '0', width: '100vw' }}>
          <Paper square className={classes.root}>
            <Tabs value={this.state.value} onChange={this.handleChange} fullWidth TabIndicatorProps={{style: {
                backgroundColor: "#2BCF8B"
                }
              }}
            >
              <Tab className={classes.tab} icon={<HomeIcon />}/>
              <Tab className={classes.tab} icon={<LocationOnIcon />}/>
              <Tab className={classes.tab} icon={<AddBoxRoundedIcon />}/>
              <Tab className={classes.tab} icon={<BookmarkIcon />}/>
              <Tab className={classes.tab} icon={<PersonPinIcon />}/>
            </Tabs>
            </Paper>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);