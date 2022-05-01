
import React, { Component } from 'react'
import Navbar from './Component/Navbar'
import News from './Component/News'
import {
  BrowserRouter,
  Routes, Route
} from "react-router-dom";


export default class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<News country="in" category="science" pagesize={9} />} />
            <Route path="/business" element={<News key="business" country="in" category="business" pagesize={9} />} />
            <Route path="/entertainment" element={<News key="entertainment" country="in" category="entertainment" pagesize={9} />} />
            <Route path="/general" element={<News key="general" country="in" category="general" pagesize={9} />} />
            <Route path="/health" element={<News key="health" country="in" category="health" pagesize={9} />} />
            <Route path="/science" element={<News key="science" country="in" category="science" pagesize={9} />} />
            <Route path="/sports" element={<News key="sports" country="in" category="sports" pagesize={9} />} />
            <Route path="/technology" element={<News key="technology" country="in" category="technology" pagesize={9} />} />

          </Routes>
        </BrowserRouter>
      </>


    )
  }
}

