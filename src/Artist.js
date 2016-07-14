import React, {Component} from 'react'

export default class Artist extends Component{
    constructor(){
      super();
      this.displayName = 'Artist';
    }

  render(){
    return(
      <span>Artist name: {this.props.name}</span>
    )
  }
  
}