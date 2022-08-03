import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useRef } from "react";

export default function Header({ check }) {
  const headerRef = useRef();
  useEffect(() => {
    window.addEventListener('scroll', () => {
      let scroll = window.scrollY;
      let data = document.querySelector('.banner').offsetHeight;
      if (scroll >= data) {
        headerRef.current.style.backgroundColor = '#fe5000';
      } else {
        headerRef.current.style.backgroundColor = 'transparent';

      }
    });
  }, []);
  return (
    <div className="header container" ref={headerRef}>
      <div className={`header-overlay ${check ? 'hidden' : ''}`}></div>
      <div className="header-menu" >
        <Link to="/">TRANG CHỦ</Link>
        <Link to="/">GIỚI THIỆU</Link>
        <Link to="/">ĐẶT VÉ</Link>
        <Link to="/">TÀI TRỢ</Link>
        <Link to="/">LIÊN HỆ</Link>
      </div>
      <div className="header-search">
        <input type="text" placeholder=" " id="search" />
        <svg className="svg_1"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.25 2.5C4.62665 2.5 2.5 4.62665 2.5 7.25C2.5 9.87335 4.62665 12 7.25 12C9.87335 12 12 9.87335 12 7.25C12 4.62665 9.87335 2.5 7.25 2.5ZM1.5 7.25C1.5 4.07436 4.07436 1.5 7.25 1.5C10.4256 1.5 13 4.07436 13 7.25C13 10.4256 10.4256 13 7.25 13C4.07436 13 1.5 10.4256 1.5 7.25Z"
            fill="#999999"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.6084 10.609C10.8036 10.4137 11.1202 10.4137 11.3155 10.609L14.353 13.6465C14.5483 13.8418 14.5483 14.1584 14.353 14.3536C14.1577 14.5489 13.8412 14.5489 13.6459 14.3536L10.6084 11.3161C10.4131 11.1208 10.4131 10.8042 10.6084 10.609Z"
            fill="#999999"
          />
        </svg>
        <svg className="svg_2"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.25 2.5C4.62665 2.5 2.5 4.62665 2.5 7.25C2.5 9.87335 4.62665 12 7.25 12C9.87335 12 12 9.87335 12 7.25C12 4.62665 9.87335 2.5 7.25 2.5ZM1.5 7.25C1.5 4.07436 4.07436 1.5 7.25 1.5C10.4256 1.5 13 4.07436 13 7.25C13 10.4256 10.4256 13 7.25 13C4.07436 13 1.5 10.4256 1.5 7.25Z"
            fill="#999999"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.6084 10.609C10.8036 10.4137 11.1202 10.4137 11.3155 10.609L14.353 13.6465C14.5483 13.8418 14.5483 14.1584 14.353 14.3536C14.1577 14.5489 13.8412 14.5489 13.6459 14.3536L10.6084 11.3161C10.4131 11.1208 10.4131 10.8042 10.6084 10.609Z"
            fill="#999999"
          />
        </svg>
        <label htmlFor="search">Tìm kiếm</label>
      </div>
    </div>
  );
}
