import { useState } from 'react';
import './home.css';
import Header from '../../components/header/Header';
import MenuList from '../../components/menu_list/Menu_list';
import FoodList from '../../components/food_list/Food_list';

const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <div className='home'>
      <Header />
      <FoodList category={category} />
      <MenuList category={category} setcategory={setCategory} />
    </div>
  );
}

export default Home;
