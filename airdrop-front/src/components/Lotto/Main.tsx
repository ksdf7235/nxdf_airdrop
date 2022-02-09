import React, { useState } from 'react';
import styled from 'styled-components';
import { useWallet } from '../../hooks/useWallet'

const MainDiv = styled.div`
  display:flex;
  flex-direction:column;
  height:100vh;
  width:100%;
  margin-top:5rem;
  background-image: linear-gradient(to right, rgba(76, 71, 67, 0.18), rgba(31, 29, 27, 0.89));
`
const PotContainer=styled.div`
  font-weight:bold;
  color:#FFB701;
  margin-top:5rem;
  margin: 5rem auto 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const PotSolContainer=styled.div`
  font-size:120px;
`
const PotUsdContainer=styled.div`
  font-size:75px;
  margin-bottom:68px;
`
const CurrentJackpot=styled.h1`
  font-size:5em;
  color:white;
  margin-bottom: 60px;
`
const GetTicket=styled.button`
  margin:0 auto;
  width:30%;
  min-width:400px;
  height:60px;
  border-radius:2px;
  background-color:rgb(8, 213, 214);
  font-size:20px;
  font-weight:bold;
  color:white;
  border-width:0px 0px 8px;
  border-bottom-style:solid;
  border-bottom-color:rgb(6, 143, 151);
  z-index: 10;
`
const BuyMultipleTicket=styled.button`
  width:10%;
  min-width:200px;
  margin:0 auto;
  height:60px;
  background:#424242;
  color:white;
  font-size:18px;
  font-weight:800;
  margin-top:80px;
  border-bottom:8px solid #303030;
  border-radius:2px;
`
const SlideDiv=styled.div`
  display:flex;
  align-items:center;
  width:100px;
  justify-content:center;

`
const SlideInput=styled.input`
  z-index:1;
  height:10px;
  width:10rem;
  border-radius:5px;
  outline:none;
  background-color:transparent;
`
//타이머

const TimerContainer = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`
const TimerBox = styled.div`
  width : 50px;
  height : 60px;
  border-radius: 5px;
  padding: 10px;
  background-color: #575757;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 3px;
  span{
    font-weight: bold;
    
    :first-child{
      font-size: 25px;
      margin-bottom: 3px;
    }
  }

`

const GetTicketContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  position: relative;
  height: 20%;
  width: 80%;
`;

const BackgroundDiv = styled.div`
  width: 300px;
  height: 150px;
  border-radius: 10px;
  background-color: #424242;
  position: absolute;
  z-index: 1;
  top : 50px;
`

const BtnDiv = styled.div`
  width: 80%;
  height: 50%;
  z-index: 10;
  display: flex;
  justify-content: center;
`

function Main() {
  const { connectWallet,walletAddress } = useWallet()
  const [noftic,setNoftic]=useState(1)
  const [multiple, setMultiple] = useState(true)
  return (
    <MainDiv>
      <PotContainer>
        <CurrentJackpot>CURRENT JACKPOT</CurrentJackpot>
        <PotSolContainer>47.7 ◎</PotSolContainer>
        <PotUsdContainer>($ 5634.5)</PotUsdContainer>
      </PotContainer>
      <GetTicketContainer>
      {/* 남은 시간 계산해주는 타이머 */}
        <TimerContainer>
          <TimerBox>
            <span>{0}</span>
            <span>hrs</span>
          </TimerBox>
          <TimerBox>
            <span>{0}</span>
            <span>mins</span>
          </TimerBox>
          <TimerBox>
            <span>{0}</span>
            <span>secs</span>
          </TimerBox>
        </TimerContainer>
        <BackgroundDiv />
        <BtnDiv>
          <GetTicket onClick={connectWallet}>
            {/* 연결해서 어떻게 작동할지 */}
            GET {noftic} TICKET
          </GetTicket>
        </BtnDiv>
      </GetTicketContainer>
      <BuyMultipleTicket onClick={()=>setMultiple(!multiple)}>Buy Multiple Tickets</BuyMultipleTicket>
      {multiple?
      <SlideDiv>
        {/* input 나오지 않는 오류 */}
        <SlideInput type="range" min="1" max="50"></SlideInput>
      </SlideDiv>:
      null}
    </MainDiv>
  );
}

export default Main;