import React from 'react'
import Charts from './components/Charts'
import './App.css';


export default function App() {
  return (
    <div className='navbar'>
      <span><a href="http://localhost:3001/GeoChart" className='a1'>GeoChart</a></span> 
      <span><a href="http://localhost:3001/LineGraph" className='a2'>LineGraph</a></span>
      <span><a href="http://localhost:3001/Bar3DChart" className='a3'>Bar3DChart</a></span>
      <span><a href="http://localhost:3001/Bar3DChart" className='a4'>TableChart</a></span>
      <Charts/>
    </div>
  )
}
