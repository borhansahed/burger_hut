import Image from 'next/image';
import React from 'react';
import bannerImage from '../assets/image/IMG_20221115_234526.jpg'
import style from '../styles/banner.module.css'

const Banner = () => {
    return (
        <>
       <article className={style.container}>
         <Image src={bannerImage} alt='' width={300} height={300} ></Image>
       
      </article>
        </>
    );
};

export default Banner;