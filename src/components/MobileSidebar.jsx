import './css/Sidebar.scss';
import { AiOutlineDashboard, AiOutlineUsergroupAdd } from 'react-icons/ai';
import { MdProductionQuantityLimits } from 'react-icons/md';
import { FiPackage } from 'react-icons/fi';
import { RiMenu3Line } from 'react-icons/ri';
import { useState } from 'react';
//import MaxSidebar from './MaxSidebar';


const MobileSidebar = () => {

    const [mtoggleClick, setMToggleClick] = useState(false)

    return (
        <>
            <div className='MobileSidebar'>
                <button className="mBtn" onClick={() => setMToggleClick(!mtoggleClick)}><RiMenu3Line /></button>
            </div>
            {
                mtoggleClick ? <div className='sidebar forMobile'>
                <div className='top'>
                    <span className='logo'>Fitpeo</span>
    
                </div>
                <div className='center'>
                    <ul>
                        <p className='title'>Main</p>
                        <li>
                            <AiOutlineDashboard className='icon' />
                            <span>Dashboard</span>
                        </li>
    
                        <li>
                            <AiOutlineUsergroupAdd className='icon' />
                            <span>Users</span>
                        </li>
    
                        <p className='title'>Main 2</p>
    
                        <li>
                            <MdProductionQuantityLimits className='icon' />
                            <span>Products</span>
                        </li>
    
                        <li>
                            <FiPackage className='icon' />
                            <span>Orders</span>
                        </li>
                        <li>
                            <FiPackage className='icon' />
                            <span>Orders</span>
                        </li>
                        <li>
                            <FiPackage className='icon' />
                            <span>Orders</span>
                        </li>
                        <p className='title'>Links</p>
                        <li>
                            <FiPackage className='icon' />
                            <span>Orders</span>
                        </li>
                        <li>
                            <FiPackage className='icon' />
                            <span>Orders</span>
                        </li>
                        <li>
                            <FiPackage className='icon' />
                            <span>Orders</span>
                        </li>
                        <li>
                            <FiPackage className='icon' />
                            <span>Orders</span>
                        </li>
                        <li>
                            <FiPackage className='icon' />
                            <span>Orders</span>
                        </li>
                        <li>
                            <FiPackage className='icon' />
                            <span>Orders</span>
                        </li>
                        <li>
                            <FiPackage className='icon' />
                            <span>Orders</span>
                        </li>
                    </ul>
                </div>
            </div>
             : null
            }
        </>

    )
}

export default MobileSidebar;