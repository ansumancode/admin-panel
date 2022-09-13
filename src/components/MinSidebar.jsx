import React from 'react';
import './css/MiniSidebar.scss';
import { AiOutlineDashboard, AiOutlineUsergroupAdd } from 'react-icons/ai';
import { MdProductionQuantityLimits } from 'react-icons/md';
import { FiPackage } from 'react-icons/fi';
import {RiMenu3Line} from 'react-icons/ri';

function MinSidebar(props) {
  return (
    <div className='sidebarMini'>
            <div className='top'>
                
                <button className='toggleIcon' onClick={()=>props.miniCallFunction()}><RiMenu3Line /></button>

            </div>
            <div className='center'>
                <ul>
                <p className='title'>Main</p>
                    <li>
                        <AiOutlineDashboard className='icon' />
                    </li>

                    <li>
                        <AiOutlineUsergroupAdd className='icon' />
                    </li>

                    <p className='title'>Main 2</p>
                    <li>
                        <MdProductionQuantityLimits className='icon' />
                    </li>

                    <li>
                        <FiPackage className='icon' />
                        
                    </li>
                    <li>
                        <FiPackage className='icon' />
                        
                    </li>
                    <li>
                        <FiPackage className='icon' />
                        
                    </li>
                    <p className='title'>Links</p>
                    <li>
                        <FiPackage className='icon' />
                        
                    </li>
                    <li>
                        <FiPackage className='icon' />
                        
                    </li>
                    <li>
                        <FiPackage className='icon' />
                        
                    </li>
                    <li>
                        <FiPackage className='icon' />
                        
                    </li>
                    <li>
                        <FiPackage className='icon' />
                        
                    </li>
                    <li>
                        <FiPackage className='icon' />
                        
                    </li>
                    <li>
                        <FiPackage className='icon' />
                        
                    </li>
                </ul>
            </div>
        </div>
  )
}

export default MinSidebar