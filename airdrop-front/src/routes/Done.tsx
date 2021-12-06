import React from 'react'
import styled from 'styled-components'
import Flex from '../components/Box/Flex'
import { useIsMobile } from '../hooks/useIsMobile'

interface Props {}

const Done = (props: Props) => {
  const isMobile = useIsMobile()

  return (
    <Wrapper isMobile={isMobile}>
      <Flex className="card">
        <Flex>
          <img className="nxdf-logo" src="/img/icon-nxdf@3x.png" alt="nxdf" />
        </Flex>
        <Flex className="header" mb="15px">
          Congratulations!
        </Flex>
        <Flex mb="60px">
          <span className="Your-friends-you-w">
            Your friends & you will receive <span className="text-style-1">5,000 NXDF</span> in a minutes. Check out
            your wallet. Don’t forget to give your friend NXDF discord invitation.
          </span>
        </Flex>
        <Flex>
          <button>Copy this event invitation link</button>
        </Flex>
      </Flex>
    </Wrapper>
  )
}

export default Done

const Wrapper = styled.div<{ isMobile?: boolean }>`
  display: flex;
  background-color: #151f42;
  flex-direction: column;
  align-items: center;

  padding: 74px 0px;
  width: 100%;

  .nxdf-logo {
    ${({ isMobile }) =>
      isMobile
        ? `
            width: 80px;
            position: absolute;
            top: -50px;
            right: 40%;
        `
        : `
      width: 120px;
      position: absolute;
      top: -60px;
      right: 40%;
    `};
  }

  .card {
    position: relative;
    flex-direction: column;
    align-items: center;
    width: ${({ isMobile }) => (isMobile ? '100%' : '768px')};
    height: 410px;
    margin: 60px 0 0;
    padding: ${({ isMobile }) => (isMobile ? '20px' : '74px 157.5px 39px')};
    background-color: #233470;

    .header {
      font-family: GmarketSans;
      font-size: 36px;
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 2;
      letter-spacing: normal;
      text-align: center;
      color: #fff;
    }

    .Your-friends-you-w {
      /* width: 453px; */
      height: 90px;
      font-family: Roboto;
      font-size: 18px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.67;
      letter-spacing: normal;
      text-align: center;
      color: #fff;
    }

    .Your-friends-you-w .text-style-1 {
      font-weight: 900;
      color: #fc0;
    }

    button {
      padding: 14px 71px 14px 72px;
      border-radius: 30px;
      background-image: linear-gradient(99deg, #799cff 5%, #ed2179 96%);
      border-radius: 30px;
      background-image: linear-gradient(103deg, #799cff 5%, #ed2179 96%);
      letter-spacing: normal;
      font-size: 20px;
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.6;
      letter-spacing: normal;
      text-align: center;
      color: #fff;
    }
  }
`
