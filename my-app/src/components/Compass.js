import React, { Component } from 'react';
import { Typography } from "@material-ui/core/";
import { Container } from "reactstrap";
import ExploreIcon from '@material-ui/icons/Explore';
import DataUsageIcon from '@material-ui/icons/DataUsage'
import { withStyles } from '@material-ui/core/styles';

const styles = {

  compass: {
    color: '#2BCF8B',
    width: '300px',
    height: '300px',
    position: 'absolute',
    left: '0', right: '0', top: '0', bottom: '0',
    margin: 'auto'
  },

  pointsContainer: {
    position: 'absolute',
    textAlign: 'center',
    top: '60px',
    right: '5px',
  },

  points: {
    color: '#ffc966',
    width: '64px',
    height: '64px',
  },

  pointsText: {
    color: '#2BCF8B',
    position: 'absolute',
    fontWeight: 'bold',
    zIndex: '10',
    top: '17px',
    left: 0,
    right: 0,
  },

};

class Compass extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
          <Container fluid={true}>
            <div className={classes.pointsContainer}>
                <DataUsageIcon className={classes.points}/>
                <Typography className={classes.pointsText} variant="h6" gutterBottom>67</Typography>
            </div>
            <ExploreIcon className={classes.compass}/>
           </Container>
      </div>
    );
  }
}

export default withStyles(styles)(Compass);
