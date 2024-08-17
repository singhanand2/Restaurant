import React, { act, useState } from 'react'
import menuImg1 from '../assets/images/f1.png'
import menuImg2 from '../assets/images/f2.png'
import menuImg3 from '../assets/images/f3.png'
import menuImg4 from '../assets/images/f4.png'
import menuImg5 from '../assets/images/f5.png'
import menuImg6 from '../assets/images/f6.png'
import menuImg7 from '../assets/images/f7.png'
import menuImg8 from '../assets/images/f8.png'
import menuImg9 from '../assets/images/f9.png'
import { FaShoppingCart } from "react-icons/fa";

import './Menu.css';

const Menu = () => {

  const menuItems = [
    {
      itemName: 'Delicious Pizza',
      category: 'Pizza',
      para: 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',
      price: '20',
      itemimage: menuImg1
    },
    {
      itemName: 'Delicious Burger',
      category: 'Burger',
      para: 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',
      price: '15',
      itemimage: menuImg2
    },
    {
      itemName: 'Delicious Pizza',
      category: 'Pizza',
      para: 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',
      price: '17',
      itemimage: menuImg3
    },
    {
      itemName: 'Delicious Pasta',
      category: 'Pasta',
      para: 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',
      price: '18',
      itemimage: menuImg4
    },
    {
      itemName: 'French Fries',
      category: 'Fries',
      para: 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',
      price: '10',
      itemimage: menuImg5
    },
    {
      itemName: 'Delicious Pizza',
      category: 'Pizza',
      para: 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',
      price: '20',
      itemimage: menuImg6
    },
    {
      itemName: 'Tasty Burger',
      category: 'Burger',
      para: 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',
      price: '12',
      itemimage: menuImg7
    },
    {
      itemName: 'Delicious Pizza',
      category: 'Pizza',
      para: 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',
      price: '14',
      itemimage: menuImg8
    },
    {
      itemName: 'Delicious Pizza',
      category: 'Pizza',
      para: 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',
      price: '10',
      itemimage: menuImg9
    },
  ]
  const category = ['All', 'Pizza', 'Burger', 'Fries', 'Pasta'];

  const [activeCategory, setActiveCategory] = useState('All');


  const filterItems = activeCategory === 'All' ? menuItems : menuItems.filter((item) => item.category === activeCategory);

  console.log(filterItems);
  console.log(activeCategory);




  return (
    <div className='main-menu-section'>
      <h2>Our Menu</h2>
      <div className='menu-buttons'>
        {category.map((category) =>
          <button key={category} className={`menu-button ${category === activeCategory ? 'active' : ''}`} onClick={() => { setActiveCategory(category) }} >{category}</button>
        )}
      </div>
      <div className='menu-container'>
        {filterItems.map((item) => {
          return (
            <div className='menu-item'>
              <div className='upper-part-image'>
                <img src={item.itemimage} alt="menu-image" />
              </div>
              <div className='lower-part'>
                <h3>{item.itemName}</h3>
                <p>{item.para}</p>
                <div className="price-cart-section">
                  <span>${item.price}</span>
                  <FaShoppingCart className='cart-icons' />
                </div>

              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Menu