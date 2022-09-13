import React from 'react'
import './Piechat.scss';
import GraphChart from './GraphChart';

function Piechat() {
    return (
        <div className="widgetLeft">
            <div className='updateCardsPieChat'>
                <div className='cardHead'>
                    <div className="cardTitle">
                        <p>Overview</p>
                    </div>
                    <div className="cardSort">
                        <p>Sort By</p>
                        <select>
                            <option>Sort by</option>
                            <option>B</option>
                            <option>C</option>
                        </select>
                    </div>
                </div>

                <div className="pieContainer">
                    <div className='pieCalculation'>
                        <p className='pieTitle'>This Month</p>
                        <p className='pieAmount'>$21,458</p>
                        <div className="pieLeftRight">
                            <div className="pieLeft">
                                <p className='pieTitle'>Order</p>
                                <p className='pieAmount pieSubAmount'>5,643</p>
                            </div>
                            <div className="pieRight">
                                <p className='pieTitle'>Growth</p>
                                <p className='pieAmount pieSubAmount'>30.56%</p>
                            </div>
                        </div>
                        <hr />
                        <div className="pieLeftRight">
                            <div className="pieLeft">
                                <p className='pieTitle'>Customers</p>
                                <p className='pieAmount pieSubAmount'>36,254</p>
                            </div>
                            <div className="pieRight">
                                <p className='pieTitle'>Revenue</p>
                                <p className='pieAmount pieSubAmount'>$6,254</p>
                            </div>
                        </div>
                        <hr />
                        <div className="pieLeftRight">
                            <div className="pieLeft">
                                <p className='pieTitle'>Current Week</p>
                                <p className='pieAmount pieSubAmount'>$58,254</p>
                            </div>
                            <div className="pieRight">
                                <p className='pieTitle'>Previous Week</p>
                                <p className='pieAmount pieSubAmount'>$69,524</p>
                            </div>
                        </div>
                    </div>
                    <GraphChart />

                </div>

            </div>
        </div>
    )
}

export default Piechat