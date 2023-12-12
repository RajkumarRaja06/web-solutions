import { DataConsumer } from '../context/dataContext';
import logo from '../images/logo.png';
import { VscAccount } from 'react-icons/vsc';
import { HiMiniShoppingBag } from 'react-icons/hi2';
import '../styles/navbar.css';
import { Link } from 'react-router-dom';
import { CartConsumer } from '../context/cartContext';

const Navbar = () => {
  const { apiData } = DataConsumer();
  const { cartItems } = CartConsumer();
  return (
    <nav className='navbar'>
      <div className='nav-logo'>
        <Link to='/'>
          <img src={logo} alt=' logo' className='nav-logo-img' />
          <h3>Daily Fresh</h3>
        </Link>
      </div>
      <div className='nav-menu'>
        <ul>
          <li>Savouries</li>
          <li>Sweets</li>
          <li>Daily Staples</li>
          <li>Edible Oil & Ghee</li>
          <li>Coffee</li>
          <li>Honey & Sweetners</li>
        </ul>
      </div>
      <div className='nav-icon'>
        <Link to='logIn' className='nav-account'>
          <VscAccount />
        </Link>
        <Link to='cart' className='nav-bag'>
          <HiMiniShoppingBag />
          <p className='nav-bag-count'>{cartItems.length}</p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
