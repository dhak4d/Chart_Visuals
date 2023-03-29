import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Label } from 'recharts';

const LineGraph = () => {
  const [salesData, setSalesData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/years')
      .then(response => {
        setSalesData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop:'50px'}}>
      <ResponsiveContainer width="50%" height={400}>
        <LineChart data={salesData}>
          <CartesianGrid strokeDasharray="4 6" />
          <XAxis dataKey="Year" stroke="#1890ff">
            <Label value="Years" position="bottom" fill="#78ADD2" offset={-50} />
          </XAxis>
          <YAxis stroke="#21AA47">
            <Label value="Sum Of Sales" position="left" angle={-90} fill="#0072AA" offset={-70} />
          </YAxis>
          <Tooltip />
          <Line type="monotone" dataKey="SumOfSales" angle={-90} stroke="#8884d8" name="Sum Of Sales" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default LineGraph;
