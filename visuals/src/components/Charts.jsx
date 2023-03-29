import React from 'react'
import { BrowserRouter, Route, Routes, } from 'react-router-dom'
import GeoChart from './GeoChart'
import LineGraph from './LineGraph'
import Bar3DChart from './Bar3DChart'
export default function Charts() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="GeoChart" element={ <GeoChart /> }
       />
        <Route path="LineGraph" element={ <LineGraph /> }
       />
        <Route path="Bar3DChart" element={ <Bar3DChart /> }
       />
    </Routes>
    </BrowserRouter>
  )
}