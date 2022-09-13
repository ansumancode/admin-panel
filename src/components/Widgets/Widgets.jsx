import '../Widgets/Widgets.scss'
import {CardData} from '../../data/Data'
//import {AiFillPieChart} from 'react-icons/ai'
import { useState } from 'react'
import Piechat from './Piechat'
import WidgetsTwo from './WidgetsTwo'
import Profile from './Profile'

const Widgets = () => {

    const [cardData, setCardData] = useState(CardData)

    return (
        <div className='widgetsContainer'>
            <div className="widgets">
                <div className="widgetLeft">


                    {

                        cardData.map((val, index) => {
                            return (

                                <div className='updateCards' key={index}>
                                    <div className="innerCardLeft">
                                        <div className='iconBox'>
                                            {val.logoIcon}
                                        </div>
                                        <div className="textValues">
                                            <p className='valueText'>{val.title}</p>
                                            <p className='valueNumber'>{val.amount}</p>
                                        </div>
                                    </div>
                                    <div className="innerCardRight">

                                        <div className="ratio posetive" >
                                            {val.ratio}
                                        </div>


                                    </div>
                                </div>
                            )
                        })
                    }



                </div>
                <Piechat />


                <WidgetsTwo />
                


            </div>

                    <Profile />
            

        </div>

    )
}

export default Widgets;