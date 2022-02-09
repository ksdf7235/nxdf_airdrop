import React, { useState } from 'react';
import styled from 'styled-components';
import { useWallet } from '../../hooks/useWallet'
import {PotContainer,PotSolContainer,PotUsdContainer,CurrentJackpot,GetTicket,BuyMultipleTicket,SlideDiv,SlideInput,TimerContainer,GetTicketContainer,TimerBox,BtnDiv, BackgroundDiv} from "./css/MainCenter/maincss"

const MainLayout = styled.div`
  display:flex;
  align-items:center ;
  justify-content: center ;
  height:100vh;
  width:100vw;
  padding-top : 5rem;
  background-image: #453C70;
  background-color: #453C70;
`;

const CenterDiv = styled.div`
  width : 34%;
  height: 100%;
  display: flex ;
  flex-direction: column ;
  align-items: center ;
  justify-content: center ;

`
const LeftDiv = styled.div`
  width : 33%;
  height: 100%;
  display: flex ;
  flex-direction: column ;
  align-items: center ;
  justify-content: center ;
`
const RightDiv = styled.div`
  width : 33%;
  height: 100%;
  display: flex ;
  flex-direction: column ;
  align-items: center ;
  justify-content: center ;
`

const ImgBoxDiv = styled.div`
  margin-right: 200px;
  width:  100%;
  height: 60%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("/img/img-lottobox.svg");
`

const ImgmenDiv = styled.div`
  width:  100%;
  height: 80%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("/img/img-lottomen.svg");
`

const GetTicketRight = styled.div`
  width: 20%;
  height: 100%;
`;

const GetTicketLeft = styled.div`
  width: 20%;
  height: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("/img/img-hourglass.svg");
  transform: translateY(-50%) ;
`;



function Main() {
  const { connectWallet,walletAddress } = useWallet()
  const [noftic,setNoftic]=useState(1)
  const [multiple, setMultiple] = useState(true)
  return (
    <MainLayout>
      <LeftDiv>
        <ImgmenDiv />
      </LeftDiv>
      <CenterDiv>
        <PotContainer>
          <CurrentJackpot>CURRENT</CurrentJackpot>
          <CurrentJackpot>JACKPOT</CurrentJackpot>
          <PotSolContainer>47.7 ◎</PotSolContainer>
          <PotUsdContainer>($ 5634.5)</PotUsdContainer>
        </PotContainer>
        <GetTicketContainer>
          <GetTicketLeft>

          </GetTicketLeft>
          <BackgroundDiv>
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
            <BtnDiv>
              <GetTicket onClick={connectWallet}>
                {/* 연결해서 어떻게 작동할지 */}
                GET {noftic} TICKET
              </GetTicket>
              </BtnDiv>
            </BackgroundDiv>
            <GetTicketRight>
            </GetTicketRight>
        </GetTicketContainer>
        <BuyMultipleTicket onClick={()=>setMultiple(!multiple)}>Buy Multiple Tickets</BuyMultipleTicket>
      </CenterDiv>
      <RightDiv>
        <ImgBoxDiv />
      </RightDiv>
    </MainLayout>
  );
}


// {multiple?
//       <SlideDiv>
//         {/* input 나오지 않는 오류 */}
//         <SlideInput type="range" min="1" max="50"></SlideInput>
//       </SlideDiv>:
//       null}


export default Main;