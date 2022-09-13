

import React from 'react'
//import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';


const data = [
    {
      name: 'Jan',
      uv: 11,
      pv: 10,
      amt: 16,
    },
    {
      name: 'Feb',
      uv: 11,
      pv: 15,
      amt: 17,
    },
    {
      name: 'Mar',
      uv: 11,
      pv: 18,
      amt: 16,
    },
    {
      name: 'Apr',
      uv: 11,
      pv: 12,
      amt: 12,
    },
    {
      name: 'May',
      uv: 11,
      pv: 19,
      amt: 18,
    },
    {
      name: 'Jun',
      uv: 11,
      pv: 16,
      amt: 15,
    },
    {
      name: 'July',
      uv: 11,
      pv: 11,
      amt: 19,
    },
  ];

function GraphChart() {
    
    return (
        <div className='pieGraph'>
        <BarChart
        width={600}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        barSize={10}
      >

      <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="0.5">
                        <stop offset="15%" stopColor="#8884d8" stopOpacity={0.8} />
                        <stop offset="85%" stopColor="#8884d8" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="0.5">
                        <stop offset="15%" stopColor="#82ca9d" stopOpacity={0.8} />
                        <stop offset="85%" stopColor="#82ca9d" stopOpacity={0} />
                    </linearGradient>
                </defs>

        <XAxis dataKey="name" scale="point" padding={{ left: 30, right: 10 }} />
        <YAxis padding={{ left: 10, right: 10 }}/>
        <Tooltip />
       
        <Bar dataKey="pv" fillOpacity={1} fill="url(#colorUv)" radius={50}/>
      </BarChart>
        </div>
    )
}

export default GraphChart