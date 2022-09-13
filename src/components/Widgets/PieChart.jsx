import React from 'react'
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import './pieChart.scss'


const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 200 },
    { name: 'Group C', value: 400 },
    { name: 'Group D', value: 400 },
];
const COLORS = ['#0088FE', '#eb7b7b', '#dbd9d9', '#0088FE'];


function PieChartMt() {
    return (
        <div className="pieChart">
            <PieChart width={245} height={250} >
                <Pie
                    data={data}
                    cx={120}
                    cy={120}
                    innerRadius={65}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={3}
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Pie
                    data={data}
                    cx={420}
                    cy={200}
                    startAngle={180}
                    endAngle={0}
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={3}
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>

                <Tooltip />
            </PieChart>
            
        </div>
    )
}

export default PieChartMt