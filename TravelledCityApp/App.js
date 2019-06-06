import React, {Component} from 'react';
import Route from './src/component/Route'

export default class App extends React.Component{
  state ={
    cities:[]
  }
  addCity = (city) =>{
    const cities = this.state.cities
    cities.push(city)
    this.setState({cities})
  }

  addLocation = () =>{

  }
  render(){
    return <Route
    screenProps={{
      cities:this.state.cities,
      addCity:this.addCity
    }}
    />
  }
}

