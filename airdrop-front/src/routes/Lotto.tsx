import React from 'react';
import Header from '../components/Lotto/Header'
import Main from '../components/Lotto/Main'
import About from '../components/Lotto/About'
import Calculator from '../components/Lotto/Calculator'
import Winners from '../components/Lotto/Winners'
import Footer from '../components/Lotto/Footer'
function Lotto() {
  return (
    <>
      <Header/>
      <Main/>
      <About/>
      <Calculator/>
      <Winners/>
      <Footer/>
    </>
  );
}

export default Lotto;