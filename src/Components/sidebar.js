import Dashboard from '../images/dashboard-fill.svg'
import Movie from '../images/film-fill.svg'
import Series from '../images/tv-2-fill.svg'
import Bookmark from '../images/bookmark-fill.svg'
import Logo from '../images/vip-crown-2-fill.svg'
import Profile from '../images/profile-pic.jpg'

const Sidebar = () => {
    return ( 
      
      <div className="h-20 md:h-screen p-2">
        <div className="bg-[#161D2F] h-full rounded text-sm flex md:grid md:content-between md:justify-center justify-between items-center text-center">
          <div className="p-3 md:justify-center grid">
            <img src={Logo} alt="" />
          </div>
          <div className="p-3 gap-8 flex md:grid md:justify-center">
            <div><img src={Dashboard} alt="" /></div>
            <div><img src={Movie} alt="" /></div>
            <div><img src={Series} alt="" /></div>
            <div><img src={Bookmark} alt="" /></div>
          </div>
          <div className="p-3">
            <img src={Profile} alt="" className='rounded-full border-2 border-gray-50 w-8'/>
          </div>
        </div>
      </div>

     );
}
 
export default Sidebar;