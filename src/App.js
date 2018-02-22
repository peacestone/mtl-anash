import React, { Component } from 'react';
import './App.css';
import Sidebar from './containers/sidebar'
import NavBar from './components/navBar'
import ListingDetails from './components/listingDetails'
import {Segment, Container} from 'semantic-ui-react'

class App extends Component {

  render() {
    return (
      <div id='app'>
        <NavBar  />
      <Container fluid>
        <Sidebar  />
        <ListingDetails />
      </Container>
      </div>
    );
  }
}

export default App;
