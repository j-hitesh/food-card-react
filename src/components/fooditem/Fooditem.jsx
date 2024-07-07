import { useContext } from 'react';
import PropTypes from 'prop-types';
import './Fooditem.css';
import { assets } from '../../assets/assets';
import { Context } from '../context/Context';

const Fooditem = ({ id, name, price, description, image }) => {
  const { cartItem, addCart, removeCart } = useContext(Context);
  return (
    <div className='food_item'>
      <div className="img_fooditem_container">
        <img className='food_img_con' src={image} alt="img" />
        <div className='food_item_counter'>
          <img onClick={() => removeCart(id)} src={assets.remove_icon_red} alt="remove" />
          <p>{cartItem[id] || 0}</p>
          <img onClick={() => addCart(id)} src={assets.add_icon_green} alt="add" />
        </div>
      </div>
      <div className="food_item_info">
        <div className="food_name">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="rating" />
        </div>
        <p className="food_item_des">{description}</p>
        <p className="food_item_price">₹{price}</p>
      </div>
    </div>
  );
}

Fooditem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Fooditem;
