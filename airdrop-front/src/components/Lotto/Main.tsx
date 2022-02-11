import React, { useState } from 'react';
import styled from 'styled-components';
import Slider from 'react-input-slider';
import Timer from '../Lotto/Timer';
import { useWallet } from '../../hooks/useWallet'
import {PotContainer,PotSolContainer,PotUsdContainer,CurrentJackpot,GetTicket,BuyMultipleTicket,TimerContainer,GetTicketContainer, BackgroundDiv} from "./css/MainCenter/maincss"

const MainLayout = styled.div`
  display:flex;
  align-items:center;
  justify-content: center;
  flex-direction: column;
  height:100%;
  width:100vw;
  margin-top:5rem;
  background-color: #453C70;
  background-image:url('/img/img-lottomen.svg'), url('/img/img-lottobox.svg');
  background-repeat:no-repeat,no-repeat;
  background-size:380px, 38%;
  background-position:left, right;
  padding-top:5rem;
`;

const HourGlass = styled.img`
  width: 11%;
  height: 100%;
  position:absolute;
  top:-50%;
  left:3%;
`;

const SliderDiv=styled.div`
  display:flex;
  align-items:center;
  margin:20px 0;
`
const SliderLabel=styled.div`
  color:white;
  font-size:1.5rem;
  font-weight:bold;
  margin-left:20px;
`
function Main() {
  const { connectWallet,walletAddress } = useWallet()
  const [noftic,setNoftic]=useState(1)
  const [multiple, setMultiple] = useState(false)
  return (
    <MainLayout id="Main">
        <PotContainer>
          <CurrentJackpot>CURRENT<br/>JACKPOT</CurrentJackpot>
          <PotSolContainer>50,000 NXDF</PotSolContainer>
          <PotUsdContainer>(1,000 $)</PotUsdContainer>
        </PotContainer>
        <GetTicketContainer>
          <HourGlass src='/img/img-hourglass.svg'/>
          <BackgroundDiv>
          {/* 남은 시간 계산해주는 타이머 */}
            <TimerContainer>
                <Timer></Timer>
            </TimerContainer>
              <GetTicket onClick={connectWallet}>
                {/* 연결해서 어떻게 작동할지 */}
                GET {noftic} TICKET
              </GetTicket>
            </BackgroundDiv>
        </GetTicketContainer>
        <BuyMultipleTicket onClick={()=>setMultiple(!multiple)}>Buy Multiple Tickets</BuyMultipleTicket>
        {multiple?
        <SliderDiv>
          <Slider styles={{track:{backgroundColor:'rgb(197, 186, 250)'}, active:{backgroundColor:'rgb(244,134,193)'}}} xmin={1} xmax={50} axis='x' x={noftic} onChange={({x})=>setNoftic(x)}></Slider>
          <SliderLabel>{noftic} Tickets</SliderLabel>
        </SliderDiv>
        :
        <SliderDiv style={{opacity:0}}>
        <Slider styles={{track:{backgroundColor:'rgb(197, 186, 250)'}, active:{backgroundColor:'rgb(244,134,193)'}}} xmin={1} xmax={50} axis='x' x={noftic} onChange={({x})=>setNoftic(x)}></Slider>
        <SliderLabel>{noftic} Tickets</SliderLabel>
      </SliderDiv>
      
      }
    </MainLayout>
  );
}



export default Main;