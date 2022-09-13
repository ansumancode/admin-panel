import React from 'react'
import './Wt.scss'
import LineChart from './LineChart'
import PieChartWt from './PieChart'
import ProductSheet from './ProductSheet'


function WidgetsTwo() {
    return (
        <div className="widgetLeft">

            <div className='updateCardsWt'>
                <div className='cardHeadWt'>
                    <div className="cardTitle">
                        <p>User Activity</p>
                        <div className="wtAmount">

                            <p className="wtSmountSub">Weekly</p>
                            <p className='wtSubCount'>16,600 </p>


                        </div>
                    </div>
                    <div className="wtSubtitle">
                        <p>Weekly</p>
                    </div>
                </div>

                <LineChart />


            </div>
            <div className='updateCardsWt'>
                <div className='cardHeadWt'>
                    <div className="cardTitle">
                        <p>Order Chart</p>
                    </div>
                    <div className="wtSubtitle">
                        <p>Weekly</p>
                    </div>
                </div>

                <PieChartWt />
            </div>
            <div className='updateCardsWt'>

                <div className='cardHeadWt'>
                    <div className="cardTitle">
                        <p>Product Chart</p>
                    </div>
                    <div className="wtSubtitle">
                        <p>Weekly</p>
                    </div>
                </div>

                <ProductSheet />

            </div>



        </div>
    )
}

export default WidgetsTwo;