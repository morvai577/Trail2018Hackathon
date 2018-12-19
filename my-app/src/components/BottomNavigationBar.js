import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
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

class BottomNavigationBar extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;

    return (
      <Paper square className={classes.root}>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          fullWidth
          TabIndicatorProps={{
            style: {
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
    );
  }
}

BottomNavigationBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BottomNavigationBar);