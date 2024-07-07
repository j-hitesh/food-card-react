import PropTypes from 'prop-types';
import './menu_list.css';
import { menu_list } from '../../assets/assets';

const Menu_list = ({ category, setcategory }) => {
  return (
    <div className='menu_explore_list'>
      <h1>What would you like to order</h1>
      <div className="menu_explorelist">
        {menu_list.map((item, index) => (
          <div
            onClick={() => setcategory(prev => prev === item.menu_name ? "All" : item.menu_name)}
            key={index}
            className="menu_list_item"
          >
            <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt={item.menu_name} />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

Menu_list.propTypes = {
  category: PropTypes.string.isRequired,
  setcategory: PropTypes.func.isRequired,
};

export default Menu_list;
