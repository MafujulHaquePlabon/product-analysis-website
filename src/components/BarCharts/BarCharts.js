import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';

const BarCharts = ({dataItems}) => {
    return (
      <div className='my-4 '>
        <h1 className="text-blue-700 font-semibold text-xl">Investment vs Revenue</h1>
      <BarChart
      width={500}
      height={300}
      data={dataItems}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="investment" stackId="a" fill="#8884d8" />
      <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
    </BarChart>
      </div>
        
    );
};

export default BarCharts;