import React from 'react'
import styled from 'styled-components'

const HeaderNav = styled.nav`
  width:100%;
  min-height:5rem;
  color:white;
  box-shadow:0 0 20px grey;
  display:flex;
  position:fixed;
  background-color:#151f42;
  top:0;
  left:0;
  justify-content:space-evenly;
  align-items:center;
`
const Logo=styled.h1`
  font-size:1.7rem;
  font-weight:bold;
`
const MenuDiv=styled.div`
  font-size:1.2rem;
  font-weight:bold;
`
const MenuSpan=styled.span`
  margin: 0 20px;
  &:hover{
    background-image: linear-gradient(45deg,#00F0F0,#E91AF0);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`
const NextDraw=styled.p`
  font-size:1.4rem;
  font-weight:bold;
  background-image: linear-gradient(45deg,#00F0F0,#E91AF0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

function Header() {
  return (
    <HeaderNav>
      <Logo>NXDF LOTTO</Logo>
      <MenuDiv>
        <MenuSpan>ABOUT US</MenuSpan>
        <MenuSpan>CALCULATOR</MenuSpan>
        <MenuSpan>WINNERS</MenuSpan>
      </MenuDiv>
      <NextDraw>next draw: saturday 2:00 pm UTC</NextDraw>
    </HeaderNav>
  );
}

export default Header;