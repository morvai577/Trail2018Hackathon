import React, { Component } from 'react';
import { AppBar, Toolbar, Typography, BottomNavigation } from "@material-ui/core/";
import { Container, Row, Col, Table } from "reactstrap";
import './App.css';
import BottomNavigationBar from './components/BottomNavigationBar';


class App extends Component {
  render() {
    return (
      <div>
        <div>
          {/* Green Appbar with the title of the app*/}
          <AppBar position="static" style={{ backgroundColor: "#2BCF8B" }}>
            <Toolbar>
              <Typography variant="title" color="inherit">
                A Snappy Name
              </Typography>
            </Toolbar>
          </AppBar>
        </div>
        {/* Main Body*/}
        <div id="DiscoverCompass">
          <Container fluid={true}>
          </Container>
          <div style={{position: 'fixed', bottom: '0', width: '100vw' }}>
            <BottomNavigationBar/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
