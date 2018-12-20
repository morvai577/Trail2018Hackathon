import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HomeIcon from '@material-ui/icons/Home';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AddBoxRoundedIcon from '@material-ui/icons/AddBoxRounded';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import { Link } from "react-router-dom";

const styles = {
  root: {
    background: 'linear-gradient(77.49deg, rgba(210, 167, 191, 0.06) -1.27%, rgba(255, 255, 255, 0) 12.56%), linear-gradient(259.8deg, rgba(16, 43, 88, 0.5) 0.76%, rgba(95, 95, 135, 0.5) 94.35%), #0B1927',
    position: 'fixed', 
    bottom: '0px',
    minWidth: '100%',
  },
  Tab: {
    width: '20%',
    color: 'white'
  },
};

class BottomNavigation extends React.Component {
  state = {
    value: this.props.value,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <Tabs value={value} onChange={this.handleChange} className={classes.root}>
        <Tab value='1' className={classes.Tab} icon={<HomeIcon />} component={Link} to="/"/>
        <Tab value='2' className={classes.Tab} icon={<LocationOnIcon />} component={Link} to="/map"/>
        <Tab value='3' className={classes.Tab} icon={<AddBoxRoundedIcon />} component={Link} to="/post"/>
        <Tab value='4' className={classes.Tab} icon={<BookmarkIcon />} component={Link} to="/activity"/>
        <Tab value='5' className={classes.Tab} icon={<PersonPinIcon />} component={Link} to="/profile"/>
      </Tabs>
    );
  }
}

BottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BottomNavigation);
