import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Router from './router';


export class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Router/>     
      </NavigationContainer>
    )
  }
}

export default App
