import React, { useState } from 'react';
import { useEffect } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Banner from './Banner/Banner';
import Contact from './Contact/Contact';
import Partner from './Partner/Partner';
import Ticket from './Ticket/Ticket';
import './index.scss';
import AOS from "aos";
import "aos/dist/aos.css";
export default function Home() {
  const [checked, setIsChecked] = useState(false);
  useEffect(() => {
    AOS.init({ duration: 1000 });
    window.addEventListener('load', () => {
      setIsChecked(true);
    });
  }, []);
  return (
    <div className='home'>
      <div className={`home__overlay ${checked ? 'active' : ''} `}></div>
      <Header check={checked} />
      <Banner check={checked} />
      <Ticket />
      <Partner />
      <Contact />
      <Footer />
    </div>
  );
}
