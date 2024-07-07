import { createContext, useState } from "react";
import PropTypes from "prop-types";
import { food_list } from "../../assets/assets";

export const Context = createContext(null);

const ContextProvider = (props) => {
  const [cartItem, setCartItem] = useState({});
  // const [currentCategory,setCurrentCategory] = useState()
  const addCart = (itemId) => {
    if (!cartItem[itemId]) {
      setCartItem((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  const removeCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        totalAmount += itemInfo.price * cartItem[item];
      }
    }
    return totalAmount;
  };

  const ContextValue = {
    food_list,
    cartItem,
    setCartItem,
    addCart,
    removeCart,
    getTotalCartAmount,
  };

  return (
    <Context.Provider value={ContextValue}>
      {props.children}
    </Context.Provider>
  );
};

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContextProvider;
