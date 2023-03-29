
import './App.css';
import Bar3DChart from './components/Bar3DChart';
import GeoChart from './components/GeoChart';
import LineGraph from './components/LineGraph';
import 'bootstrap/dist/css/bootstrap.min.css';
import Charts from './components/Charts';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';

function App() {
   return (
    <React.Fragment>
 <BrowserRouter>
    <Routes className='content'>
        <Route exact path="/" element={<Charts/>}/>
        <Route path="/linegraph" element={<LineGraph/>}/>
        <Route path="/geochart" element={<GeoChart/>} />
        <Route path="/bar3dchart" element={<Bar3DChart/>} /> 
    </Routes>
    </BrowserRouter>
    </React.Fragment> 

  );
}

export default App;




