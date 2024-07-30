import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "#000" }}>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<News key="general" category="general" />}>

            </Route>
            <Route exact path="/business" element={<News key="business" category="business" />}>

            </Route>
            <Route exact path="/sports" element={<News key="sports" category="sports" />}>

            </Route>
            <Route exact path="/entertainment" element={<News key="entertainment" category="entertainment" />}>

            </Route>
            <Route exact path="/technology" element={<News key="technology" category="technology" />}>

            </Route>
          </Routes>
        </Router>
      </div>
    )
  }
}
