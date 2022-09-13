import './css/Sidebar.scss';

// import { MdProductionQuantityLimits } from 'react-icons/md';
// import { FiPackage } from 'react-icons/fi';
import { RiMenu3Line } from 'react-icons/ri';
import SidebarItems from "../components/Widgets/SidebarItems"
import itemsJson from '../data/Sidebar.json'


const MaxSidebar = (props) => {


    return (

        <div className='sidebar'>
            <div className='top'>
                <span className='logo'>Fitpeo</span>
                <button className='toggleIcon' onClick={() => props.callFunction()}><RiMenu3Line /></button>

            </div>
            <div className='center'>

            {
                itemsJson.map((item, index) => <SidebarItems key={index} item={item}/> )
            }
                

            </div>
        </div>
    )
}

export default MaxSidebar;