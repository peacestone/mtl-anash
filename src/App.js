import React, { Component } from 'react';
import './App.css';
import Sidebar from './containers/sidebar'

class App extends Component {
  render() {
    return (
      <div >
        <h2>MTL Anash</h2>
        <Sidebar />
      </div>
    );
  }
}

export default App;
