import React from 'react';
import { Pie, PieChart, Tooltip } from 'recharts';

const PieCharts = ({dataItems}) => {
    return (
       <div className='my-4 '>
          <div className='my-4 '>
            <h1 className="text-blue-700 font-semibold text-xl">Investment vs Revenue</h1>
        <PieChart width={400} height={400}>
        <Pie data={dataItems} dataKey="investment" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
        <Pie data={dataItems} dataKey="revenue" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
       
      </PieChart>
       </div>  
       </div>
    );
};

export default PieCharts;