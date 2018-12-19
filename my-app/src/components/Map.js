import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography } from "@material-ui/core/";
import { withStyles } from '@material-ui/core/styles';
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

class Map extends Component {

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
        </div>
        <div style={{ position: 'fixed', bottom: '0', width: '100vw' }}>
          <Paper square className={classes.root}>
            <Tabs value={this.state.value} onChange={this.handleChange} fullWidth TabIndicatorProps={{
              style: {
                backgroundColor: "#2BCF8B"
              }
            }}
            >
              <Tab className={classes.tab} icon={<HomeIcon />} component={Link} to="/" />
              <Tab className={classes.tab} icon={<LocationOnIcon />} component={Link}
                to="/map" />
              <Tab className={classes.tab} icon={<AddBoxRoundedIcon />} />
              <Tab className={classes.tab} icon={<BookmarkIcon />} />
              <Tab className={classes.tab} icon={<PersonPinIcon />} />
            </Tabs>
          </Paper>
        </div>
      </div>
    );
  }
}

Map.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Map);