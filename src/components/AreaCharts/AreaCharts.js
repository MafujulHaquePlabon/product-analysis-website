import React from 'react';
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';


const AreaCharts = ({dataItems}) => {
    console.log(dataItems)
    return (
        <div className='my-4 '>
          <h1 className="text-blue-700 font-semibold text-xl">Investment vs Revenue</h1>
        <AreaChart
          width={500}
          height={400}
          data={dataItems}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Area  dataKey="investment"  />
          <Area  dataKey="revenue"  />
         
        </AreaChart>
        </div>
      
    );
};

export default AreaCharts;