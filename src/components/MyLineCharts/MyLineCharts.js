import React from "react";
import {
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const MyLineCharts = ({ dataItems }) => {
  //console.log(dataItems);
  return (
    <div className='my-4 '>
        <h1 className="text-blue-700 font-semibold text-xl ">Month Wise Sell</h1>
    <LineChart width={500} height={300} data={dataItems}>
      <Line type="monotone" dataKey="sell">{''}
      </Line>
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
    </LineChart>
    </div>
    );
};

export default MyLineCharts;
