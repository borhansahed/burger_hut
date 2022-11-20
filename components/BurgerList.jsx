import React from 'react';
import style from '../styles/burgerList.module.css'
import BugerCard from './BugerCard';

const BurgerList = () => {
    return (
        <div className={style.container}>

            <div>
                <h1 className={style.title}>THE BEST BURGER IN TOWN</h1>
            <p className={style.description}>Don’t be sad. We live in a reality where burgers exist. Following your heart will eventually lead you to burgers. the best burgers are like life — messy and topped with bacon. Let the burger party begin!</p>

            <div className={style.wrapper}>
                <BugerCard/>
                <BugerCard/>
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