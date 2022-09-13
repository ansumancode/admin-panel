import './css/Navbar.scss';
import { AiOutlineSearch } from 'react-icons/ai'
import { MdLanguage, MdDashboard, MdNotificationsNone, MdHome } from 'react-icons/md'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='wrapper'>
                <div className='Breadcrumbs'>
                    <p>Dashboard</p>
                </div>
                <div className='items'>
                    <div className="item">
                        <AiOutlineSearch />
                    </div>
                    <div className="item">
                        <MdLanguage />
                    </div>
                    <div className="item">
                        <MdDashboard />
                    </div>
                    <div className="item">
                        <MdNotificationsNone />
                        <div className='counter'>4</div>
                    </div>
                    <div className="item">
                        <MdHome />
                    </div>
                    <div className="item">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1BwYl1Svb2h_YRhj9tcnZk0yAuIHh3oBM03dzDa8f&s" className='profileImg' alt='profile' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;