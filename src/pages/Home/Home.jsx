import { useState } from 'react';
import './home.css';
import Header from '../../components/header/Header';
import Menu_list from '../../components/menu_list/Menu_list';
import Food_list from '../../components/food_list/Food_list';

const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <div className='home'>
      <Header />
      <Menu_list category={category} setcategory={setCategory} />
      <Food_list category={category} />
    </div>
  );
}

export default Home;
