import React from 'react';
import style from '../styles/burgerList.module.css'
import BugerCard from './BugerCard';

const BurgerList = () => {
    return (
        <div className={style.container}>

            <div>
                <h1 className={style.title}>THE BEST BURGER IN TOWN</h1>
            <p className={style.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis adipisci totam cumque, dignissimos libero necessitatibus, illum repellendus, odit doloribus beatae.</p>

            <div className={style.wrapper}>
                <BugerCard/>
                <BugerCard/>
                <BugerCard/>
                <BugerCard/>
                <BugerCard/>
                <BugerCard/>
            </div>
            </div>
            
        </div>
    );
};

export default BurgerList;