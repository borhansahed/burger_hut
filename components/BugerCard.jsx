import Image from 'next/image';
import React from 'react';
import burger from '../assets/image/buger.png'

const BugerCard = () => {
    return (
        <div>
            <Image src={burger} alt='' width={500} height={500}></Image>
        </div>
    );
};

export default BugerCard;