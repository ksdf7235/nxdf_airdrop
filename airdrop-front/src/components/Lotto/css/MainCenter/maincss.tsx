import styled from "styled-components"

export const PotContainer=styled.div`
  font-weight:bold;
  color:#FFB701;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const PotSolContainer=styled.div`
  font-size:120px;
`
export const PotUsdContainer=styled.div`
  font-size:75px;
  margin-bottom:60px;
`
export const CurrentJackpot=styled.h1`
  font-size:5em;
  color:white;
  text-align: center;
  :last-of-type{
    margin-bottom: 60px;
  }
`
export const GetTicket=styled.button`
  margin:0 auto;
  width:100%;
  min-width:250px;
  height:60px;
  border-radius:2px;
  background-color:#C5BAFA;
  font-size:20px;
  font-weight:bold;
  color:#DC348C;
  border-width:0px 0px 8px;
  border-bottom-style:solid;
  border-bottom-color:#B75BB7;
  z-index: 10;
`
export const BuyMultipleTicket=styled.button`
  width:10%;
  min-width:200px;
  margin:0 auto;
  height:60px;
  background:#C5BAFA;
  color:#DC348C;
  font-size:18px;
  font-weight:800;
  margin-top:80px;
  border-bottom:8px solid #B75BB7;
  border-radius:2px;
`
export const SlideDiv=styled.div`
  display:flex;
  align-items:center;
  width:100px;
  justify-content:center;

`
export const SlideInput=styled.input`
  z-index:1;
  height:10px;
  width:10rem;
  border-radius:5px;
  outline:none;
  background-color:transparent;
`
//타이머

export const TimerContainer = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`
export const TimerBox = styled.div`
  width : 50px;
  height : 60px;
  border-radius: 5px;
  padding: 10px;
  background-color: #424242;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 3px;
  color : white;
  span{
    font-weight: bold;
    :first-child{
      font-size: 25px;
      margin-bottom: 3px;
    }
  }

`

export const GetTicketContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  position: relative;
  height: 15%;
  width: 70%;
  background-color: #352F58;

`;

export const BackgroundDiv = styled.div`
  width: 60%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  
`

export const BtnDiv = styled.div`
  width: 80%;
  height: 50%;
  z-index: 10;
  display: flex;
  justify-content: center;
`