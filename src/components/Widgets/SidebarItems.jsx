import React, { useState } from 'react'
import { AiOutlineDashboard, AiOutlineUsergroupAdd, AiOutlineDown } from 'react-icons/ai';

const SidebarItems = ({ item }) => {

    const [open, setOpen] = useState(false)


    if (item.childrens) {
        return (


            <div className={open ? "sideBarItems open" : "sideBarItems"}>
                <div className="sideBarTitle">
                    <span>
                        
                        
                        <i className={item.icon} style={{marginRight: "10px"}}/>
                        {item.title}

                    </span>
                    <AiOutlineDown className="downIcon icon" onClick={() => setOpen(
                        !open
                    )} />

                </div>
                <div className="sidebarContant">
                    {item.childrens.map((child, index)=> <SidebarItems key={index} item={child} />)}
                </div>

            </div>
        )
    } else {
        return (
            <div className="sideBarItems">
                <div className="sideBarTitle">
                    <span>
                        
                        {item.title}

                    </span>


                </div>


            </div>
        )
    }
}




export default SidebarItems