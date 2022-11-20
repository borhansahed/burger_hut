import Image from 'next/image';
import React from 'react';
import burger from '../assets/image/burgerItem.png'

const BugerCard = () => {
    return (
        <div className=''>
            <div className=''>
               <Image className='hover:animate-spin' src={burger} alt='' width={400} height={400}></Image>
            <div className='flex flex-col justify-center items-center'>
              <h2 className='text-center text-2xl text-red-600'>Hot Burger</h2>
              <h1 className='mb-2 text-2xl text-red-600'>$19</h1>
            <p className='w-72 text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, facere.</p>  
            </div> 
            </div>
            
            
        </div>
    );
};

export default BugerCard;