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
    margin: 'auto',
    background: '#222',
    borderRadius: '40px',
	  border: '5px solid #444',
	  overflow: 'hidden',
  },

  disc: {
    position: 'absolute',
	  left: '0', right: '0', top: '0', bottom: '0',
	  zIndex: '200',
	  background: "url('http://dev.rvltn.eu/compass/compass.svg')",
    width: '300px',
    height: '300px',
	  backgroundSize: '100%'
  },

  arrow: {
    position: 'absolute',
    left: '0', right: '0', top: '0', bottom: '0',
    zIndex: '1000',
    background: "url('http://dev.rvltn.eu/compass/arrow.svg')",
    width: '300px',
    height: '300px',
    backgroundSize: '100%'
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
  constructor(props) {
    super(props);
    this.handleLoad = this.handleLoad.bind(this);
  }
  
  componentDidMount() {
    window.addEventListener('load', this.handleLoad);
  }
  
  handleLoad() {
    console.log('compass should work now');

    if (window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', function (eventData) {
        // gamma: Tilting the device from left to right. Tilting the device to the right will result in a positive value.
        // gamma: Het kantelen van links naar rechts in graden. Naar rechts kantelen zal een positieve waarde geven.
        var tiltLR = eventData.gamma;

        // beta: Tilting the device from the front to the back. Tilting the device to the front will result in a positive value.
        // beta: Het kantelen van voor naar achteren in graden. Naar voren kantelen zal een positieve waarde geven.
        var tiltFB = eventData.beta;

        // alpha: The direction the compass of the device aims to in degrees.
        // alpha: De richting waarin de kompas van het apparaat heen wijst in graden.
        var dir = eventData.alpha

        // Call the function to use the data on the page.
        // Roep de functie op om de data op de pagina te gebruiken.
        deviceOrientationHandler(tiltLR, tiltFB, dir);
      }, false);
    }

    function deviceOrientationHandler(tiltLR, tiltFB, dir) {
      // Rotate the disc of the compass.
      // Laat de kompas schijf draaien.
      var compassDisc = document.getElementById("compassDiscImg");
      compassDisc.style.webkitTransform = "rotate(" + dir + "deg)";
      compassDisc.style.MozTransform = "rotate(" + dir + "deg)";
      compassDisc.style.transform = "rotate(" + dir + "deg)";
    }

  }

  render() {
    const { classes } = this.props;

    return (
      <div>
          <Container fluid={true}>
            <div className={classes.pointsContainer}>
                <DataUsageIcon className={classes.points}/>
                <Typography className={classes.pointsText} variant="h6" gutterBottom>67</Typography>
            </div>
            <div className={classes.compass}>
              <div className={classes.arrow}></div>
              <div id="compassDiscImg" className={classes.disc}></div>
            </div>
           </Container>
      </div>
    );
  }
}

export default withStyles(styles)(Compass);
