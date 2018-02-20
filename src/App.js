import React, { Component } from 'react';
import './App.css';
import Sidebar from './containers/sidebar'
import NavBar from './components/navBar'
import {Segment, Container} from 'semantic-ui-react'

class App extends Component {

  render() {
    return (
      <div >
        <NavBar style={{backgroundColor: '#2B2D42'}} />
        <Segment basic style={{backgroundColor: '#EF233C', width: '260px', marginTop: '0'}} >
          <Sidebar  />
        </Segment>
      </div>
    );
  }
}

export default App;
