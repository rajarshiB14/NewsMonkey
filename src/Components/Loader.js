import React, { Component } from 'react'
import load from './load.gif'

export class Loader extends Component {
  render() {
    return (
      <div className="text-center text-light">
        <img src={load} alt="loading" />
      </div>
    )
  }
}

export default Loader
