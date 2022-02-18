import React from 'react';
import Header from '../components/Lotto/Header'
import Main from '../components/Lotto/Main'
import About from '../components/Lotto/About'
import Winners from '../components/Lotto/Winners'
import Footer from '../components/Lotto/Footer'
import LotteryBuyers from '../components/Lotto/LotteryBuyers'
function Lotto() {
  return (
    <>
      <Header/>
      <Main/>
      <LotteryBuyers/>
      <About/>
      <Winners/>
      <Footer/>
   </>
  );
}

export default Lotto;