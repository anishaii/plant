import React from 'react';
import { useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';
import './Home.css';


function Home() {
  const navigate = useNavigate();

  return (
    <div>
    <div className='navbar'>
      <img src={assets.final_logo} alt="" className='logo' />
      <ul className='navbar-menu'>
            <li>Home</li>
            <li>Outlets</li>
            <li>Offfer</li>
            <li>Contact us</li>

        </ul>
      <div className='navbar-right'>
        <img src={assets.search_icon} alt="" />
            <div className='nav-search-icon'>
                <img src={assets.basket_icon} alt="" />
                <div className="dot"></div>
            </div>
      <button onClick={() => navigate('/login')} >Login</button>
      <button onClick={() => navigate('/register')} > Register</button> 
      </div>
    </div>
    <div className='header'>

    </div>
    </div>
  );
}
export default Home;

//<img src={assets.final_logo} alt="" className='logo' />
//  <ul className='navbar-menu'>
//             <li onClick={()=>SetMenu("Home")} className={menu=="Home"?"active":""}>Home</li>
//             <li onClick={()=>SetMenu("Menu")}  className={menu=="Menu"?"active":""}>Menu</li>
//             <li onClick={()=>SetMenu("mobile-app")}  className={menu=="mobile-app"?"active":""}>mobile-app</li>
//             <li onClick={()=>SetMenu("Contact us")}  className={menu=="Contact us"?"active":""}>Contact us</li>

//         </ul>

