import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Chart from 'react-google-charts';

const API_ENDPOINT = 'http://localhost:3000/Country';

const GeoChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(API_ENDPOINT)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);


  const chartData = [['Country', 'Population']];
  data.forEach(({ Country, Population}) => {
    chartData.push([Country, Number(Population)]);
  });

  return (
    <>
    <h4 style={{textAlign:'center',marginTop:'15px' }}>Population Explorer</h4>
    <div style={{ marginTop:'50px', color:'black' }}>
    <Chart
      chartType="GeoChart"
      data={chartData}
      options={{
        title: 'Population Explorer',
        colorAxis: { colors: ['#78ADD2', '#0072AA', '#A4D0A0', '#21AA47'] }
        
      }}
      width="100%"
      height="400px"
    />
  
    </div>
    </>
  );
};

export default GeoChart;

