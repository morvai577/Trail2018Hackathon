import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/icons/List';
import Shop from '@material-ui/icons/ShoppingBasket';
import Location from '@material-ui/icons/LocationOn';

const styles = {
  Paper: {
    minWidth: '100%',
    zIndex: 10,
    position: 'relative',
  },
  Tab: {
    width: '33.333%',
    padding: '14px',
  },
};

class ActivityTabs extends React.Component {
  state = {
    value: this.props.value,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.Paper} square>
        <Tabs
          value={this.state.value}
          indicatorColor="primary"
          textColor="primary"
          onChange={this.handleChange}
        >
          <Tab className={classes.Tab} icon={<List />} value='My Posts' />
          <Tab className={classes.Tab} icon={<Location />} value='My Places' />
          <Tab className={classes.Tab} icon={<Shop />} value='Shop' />
        </Tabs>
      </Paper>
    );
  }
}

export default withStyles(styles)(ActivityTabs);