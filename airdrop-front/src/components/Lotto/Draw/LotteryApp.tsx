import styled from "styled-components";
import LotteryBox from "./LotteryBox";

const Div=styled.div`
  width:100vw;
  height:100vh;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  color:black;
  background-color:#453C70;
`
 function LotteryApp() {
    return (
        <Div>
            <h1 id="title">Lotto Draw</h1>
            <LotteryBox />
        </Div>
    );
}


export default LotteryApp;