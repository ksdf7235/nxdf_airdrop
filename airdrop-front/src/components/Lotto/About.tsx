import React from 'react';
import styled from 'styled-components';

const AboutDiv=styled.div`
  text-align:center;
  height:100vh;
  widht:100%;
  padding: 60px 0;
`
const Welcome=styled.h1`
  background-image: linear-gradient(45deg,#00F0F0,#E91AF0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size:2em;
  font-weight:bold;
  display:inline;
`
function About() {
  return (
    <AboutDiv>
      <Welcome>WELCOMT TO NXDF LOTTO</Welcome>
    </AboutDiv>
  );
}

export default About;