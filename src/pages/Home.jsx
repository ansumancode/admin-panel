import './Home.scss';
import Sidebar from '../components/Sidebar';
//import MiniSidebar from '../components/MinSidebar'
import MobileSidebar from '../components/MobileSidebar';
import Navbar from '../components/Navbar';
import Widgets from '../components/Widgets/Widgets';

const Home = () => {
    return (
        <>
            <MobileSidebar />

            <div className='home'>
                <Sidebar />
                <div className='homeContainer'>
                    <Navbar />
                    <Widgets />
                </div>
            </div>
        </>
    )
}

export default Home;
