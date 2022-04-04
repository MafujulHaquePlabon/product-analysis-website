import React, { useEffect, useState } from 'react';
import AreaCharts from '../AreaCharts/AreaCharts';
import BarCharts from '../BarCharts/BarCharts';
import MyLineCharts from '../MyLineCharts/MyLineCharts';
import PieCharts from '../PieCharts/PieCharts';


const Dashboard = () => {
    const [dataItems,setDataItems]=useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=> setDataItems(data))
    },[]);
    return (
       <div className='grid grid-cols-1 md:grid-cols-2  '>
          
         <MyLineCharts dataItems={dataItems}></MyLineCharts>
                <AreaCharts dataItems={dataItems}></AreaCharts> 
                <BarCharts  dataItems={dataItems} ></BarCharts>
                <PieCharts  dataItems={dataItems}></PieCharts>
       </div>
    );
};

export default Dashboard;