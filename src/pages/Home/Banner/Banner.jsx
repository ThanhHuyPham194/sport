import React from 'react';
import './Banner.scss';
import backgroundImage from '../../../assets/images/banner.png';
export default function Banner({ check }) {
  return (
    <div className='banner' data-aos="fade-in" data-aos-delay="500">
      <img src={backgroundImage} alt="" />
      <button className={`${check && 'active'}`}>TÌM HIỂU THÊM</button>
    </div>
  );
}
