import { AreaChart, Area, YAxis, XAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


const data = [
    {
       
        "Product A": 3432,
        "Procuct B": 2342
    },
    {
        
        "Product A": 2342,
        "Procuct B": 3246
    },
    {
        
        "Product A": 4565,
        "Procuct B": 4556
    },
    {
        
        "Product A": 6654,
        "Procuct B": 4465
    },
    {
      
        "Product A": 8765,
        "Procuct B": 4553
    }
]

const LineChart = () => {
    return (

        <div className="lineChart">
        
            <AreaChart width={250} height={200} data={data}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <Legend verticalAlign = "top" position="right" style={{fontSize: "11px", marginBottom: "10px"}}/>
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                    </linearGradient>
                </defs>
                
                <XAxis dataKey="name" style={{fontSize: "11px"}}/>
                <YAxis style={{fontSize: "11px"}} />
                
                <Tooltip />
                
                <Area type="monotone" dataKey="Product A" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                <Area type="monotone" dataKey="Procuct B" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
            </AreaChart>
        </div>
    )
}

export default LineChart;