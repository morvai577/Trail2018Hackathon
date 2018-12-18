import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';

const styles = {
  root: {
    flexGrow: 1,
    maxWidth: 500,
    backgroundColor: '#2BCF8B',
    bottom: 0
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
              backgroundColor: "blue"
            }
          }}
        >
          <Tab icon={<PhoneIcon />} label="H" />
          <Tab icon={<FavoriteIcon />} label="L" />
          <Tab icon={<PersonPinIcon />} label="A" />
          <Tab icon={<PersonPinIcon />} label="B" />
          <Tab icon={<PersonPinIcon />} label="P" />
        </Tabs>
      </Paper>
    );
  }
}

BottomNavigationBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BottomNavigationBar);