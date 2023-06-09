import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Bar from 'react-google-charts';

const API_ENDPOINT = 'http://localhost:3000/IndustrialSector';

const Bar3DChart = () => {
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

  const chartData = [['IndustrialSector', 'SumOfProfits']];
  data.forEach(({ IndustrialSector, SumOfProfits }) => {
    chartData.push([IndustrialSector, Number(SumOfProfits)]);
  });

  return (
    <>
    <h3 style={{textAlign:'center'}}>3D Bar Chart</h3>
    <div style={{ display: 'flex', justifyContent: 'center', marginTop:'10px'}}>
    <Bar
      chartType="ColumnChart"
      data={chartData}
      options={{
        title: 'Sum of Profits by Industrial Sector',
        is3D: true,
        chartArea: { width: '60%' },
        hAxis: {
          title: 'Sum of Profits',
          minValue: 0,
        },
        vAxis: {
          title: 'Industrial Sector',
          
        },
      }}
      width="100%"
      height="500px"
      legendToggle
      />
    </div>
    </>
  );
};

export default Bar3DChart;
