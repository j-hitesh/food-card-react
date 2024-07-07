import { useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menu, setMenu] = useState("menu");

  return (
    <div className='navbar'>
      <img src={assets.logo} alt="logo" className="logo" />
      <ul className="left_menu">
        <li onClick={() => setMenu("Home")} className={menu === "Home" ? "active" : ""}> <Link to='/'>Home</Link></li>
        <li onClick={() => setMenu("Reviews")} className={menu === "Reviews" ? "active" : ""}><Link to='/Reviews'>Reviews</Link></li>
        <li onClick={() => setMenu("Cart")} className={menu === "Cart" ? "active" : ""}><Link to='/Cart'> Cart</Link></li>
      </ul>
      <div className="right_menu">
        <button>Sign-up</button>
        <button>Log-in</button>
      </div>
    </div>
  );
};

export default Header;
