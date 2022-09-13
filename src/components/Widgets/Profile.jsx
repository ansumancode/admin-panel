import React, { useState } from 'react'
import './Profile.scss'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import SemiCircleProgressBar from "react-progressbar-semicircle"
import { ProfileDataCalender } from '../../data/Data'

const Profile = () => {

    const [currData, setCurrData] = useState(ProfileDataCalender);

    return (
        <div className="widgets profileDiv">
            <div className="widgetRight" >
                <div className='updateCards' >
                    <div className="profileImageCard">
                        <div className="profileTimeline">
                            <img src="https://images.unsplash.com/photo-1552152370-fb05b25ff17d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ymx1ZSUyMGxhbmRzY2FwZXxlbnwwfHwwfHw%3D&w=1000&q=80" alt="timeline" className='imageTimeline' />
                        </div>
                        <div className="ProfilePhoto">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1BwYl1Svb2h_YRhj9tcnZk0yAuIHh3oBM03dzDa8f&s" className="profileImage" alt="profileImage" />

                            <p className="profileName">Ansuman</p>
                            <p className="profileDesignation">Web Developer</p>
                        </div>
                    </div>
                    <div className='profileDataContainer'>
                        <div className="profileDataSubContainer">
                            <div className="profileProducts">
                                <p className="productNumber">1,256</p>
                                <p className="productProfileTitle">Products</p>
                            </div>
                            <div className="profileProducts">
                                <p className="productNumber">15,256</p>
                                <p className="productProfileTitle">Followers</p>
                            </div>
                        </div>

                    </div>

                    <hr />

                    <div className='profileDataContainer'>
                        <div className="profileEarningHeader">
                            <p className="profileEarningTitle">Earning</p>
                            <p className="iBtn"><AiOutlineInfoCircle /></p>

                        </div>

                        <div className="progressBarProfile">
                            <SemiCircleProgressBar percentage={50} showPercentValue />

                            <div className="profileProducts">
                                <p className="productNumber">$ 26,256</p>
                                <p className="productProfileTitlePB"><span style={{ backgroundColor: "rgb(199, 224, 193)", color: "green", borderRadius: "30%", padding: "2px" }}>+25.3</span> Form Progress</p>
                            </div>
                        </div>

                    </div>

                    <hr />

                    {
                        currData.slice(0, 3).map((val, index) => {
                            return (

                                <div className="profileCalenderContainer" key={index}>
                                    <div className="calenderDate">
                                        <p className="dateNumber">{val.date}</p>
                                        <p className="profileMonth">{val.month}</p>
                                    </div>
                                    <div className="calenderDes">{val.des}</div>

                                </div>

                            )

                        })
                    }


                </div>
            </div>
        </div>
    )
}

export default Profile