import './css/Sidebar.scss';
import MaxSidebar from './MaxSidebar';
import MiniSidebar from './MinSidebar';
import { useState } from 'react';



const Sidebar = () => {

    const [toggleClick, setToggleClick] = useState(true)


    return (
        <>
        {
            toggleClick ?  <MaxSidebar callFunction={()=> setToggleClick(false)} /> : 
            <MiniSidebar miniCallFunction={()=> setToggleClick(true)} /> 
        
        }
        
        

        
        </>
          
        
    )
}

export default Sidebar;