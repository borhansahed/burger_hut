import React from 'react';
import {GiHamburger} from 'react-icons/gi'
import {BsLinkedin} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import style from '../styles/footer.module.css'
import footerImg from '../assets/image/Hamburger-pana.png'
import Image from 'next/image';

const Footer = () => {
    return (
        <div className={style.container}>
          <div className={style.icons}>
           <Image src={footerImg} alt="" width={600} height={400}></Image>

          </div>

          <div className={style.section}>
            <div className={style.items}>
          <h1>Without cheese <br /> a burger is akin to a hug without a squeeze. <span className='text-xl'>- LEGEND</span> </h1>
          </div>
          <div className={style.items}>
            <h1>FIND OUR RESTAURANTS</h1>
            <p>4782 OAKMOUND DRIVE <br />
            HICKORY HILLS, 60457 <br />
            (812) 773-405-6186</p>
            <p>4782 OAKMOUND DRIVE <br />
            HICKORY HILLS, 60457 <br />
            (812) 773-405-6186</p>
            <p>4782 OAKMOUND DRIVE <br />
            HICKORY HILLS, 60457 <br />
            (812) 773-405-6186</p>
            <p>4782 OAKMOUND DRIVE <br />
            HICKORY HILLS, 60457 <br />
            (812) 773-405-6186</p>
            <p>4782 OAKMOUND DRIVE <br />
            HICKORY HILLS, 60457 <br />
            (812) 773-405-6186</p>
            
            
           
          </div>
          <div className={style.items}>
            <h1>OPENING TIMES</h1>
            <p>SATURDAY UNTIL WEDNESDAY <br />
             8AM - 6PM
            </p>
            <p>THURSDAY UNTIL FRIDAY <br />
            6PM - 12AM</p>

            <div className={style.contact}>
              <h1>CONNECT US</h1>
              <div className={style.socialIcons}>
                <h3><BsLinkedin/></h3> 
                <h3><BsInstagram/></h3> 
                <h3><BsWhatsapp/></h3> 
              </div>
             
            </div>
            </div>
          </div>
          
        </div>
    );
};

export default Footer;