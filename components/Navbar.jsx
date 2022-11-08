import React from 'react';
import { BsTelephone } from 'react-icons/bs';
import style from '../styles/Navbar.module.css'
import {GiHamburger} from 'react-icons/gi'
import {BsCart} from 'react-icons/bs'

const Navbar = () => {
    return (
       <nav>
      <div className={style.container}>
    
        <div className={style.item}>
          <div className={style.callButton}>
               <li><BsTelephone/></li>
          </div>
         <div className={style.texts}>
           <h1  className={style.texts}>Order now</h1>
       <h5  className={style.texts}>0174 6391 531</h5>
         </div>
      
        </div>

        <div className={style.item}>
         <ul className={style.list}>
         <li className={style.listItem}>Home</li>
         <li className={style.listItem}>Product</li>
         <li className={style.listItem}>Blog</li>
         <li className={style.logo}><GiHamburger/></li>
         <li className={style.listItem}>About</li>
         <li className={style.listItem}>Contact</li>
         </ul>

        </div>

        <div className={style.item}>
        <div className={style.cart}>
          <li className={style.cartIcon}><BsCart></BsCart></li>
          <h2 className={style.counter}>2</h2>
        </div>
        </div>

      </div>


       </nav>
    );
};

export default Navbar;