import './Menu.scss';

import { useEffect, useState } from 'react';
import header from '../../assets/header.svg'
import Products from '../../components/Products/Products';

function Menu() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const BASE_URL = 'https://airbean-api-xjlcn.ondigitalocean.app/api/beans';

    async function getMenu() {
      try {
        const response = await fetch(BASE_URL);
        const data = await response.json();
        setMenu(data.menu);
      } catch (error) {
        console.log(error);
      }
    }
    getMenu();
  }, []);

  return (
    <article className="menu">
      <img className="menu__image" src={header} alt="colored leafs" />
      <h1 className="menu__title">Meny</h1>
      <Products menu={menu} />
      <img className="menu__image menu__image-rotated" src={header} alt="colored leafs" />
    </article>
  );
}

export default Menu;