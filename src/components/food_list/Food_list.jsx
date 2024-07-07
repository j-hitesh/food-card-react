import { useContext } from 'react';
import PropTypes from 'prop-types';
import './Food_list.css';
import { Context } from '../context/Context';
import Fooditem from '../fooditem/Fooditem';

const Food_list = ({ category }) => {
  const { food_list } = useContext(Context);

  return (
    <div className='food-display' id='menu'>
      <h2>Popular Foods</h2>
      <div className="food_list_display">
        {food_list.map((item, index) => {
          if (category === "All" || category === item.category) {
            return (
              <Fooditem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

Food_list.propTypes = {
  category: PropTypes.string.isRequired,
};

export default Food_list;
