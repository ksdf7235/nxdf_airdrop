import React from 'react'
import styled from 'styled-components'
import Flex from '../components/Box/Flex'
import { useIsMobile } from '../hooks/useIsMobile'
import { CopyToClipboard } from 'react-copy-to-clipboard'

interface Props {}

const INVITATION_LINK = 'https://discord.gg/vZard7w6sK'

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
            More detail of the results will be announced in the NeXt-DeFi Protocol discord community. Stay tuned on our
            official twitter{' '}
            <a href="https://twitter.com/NXDF16" target="_blank" rel="noreferrer">
              https://twitter.com/NXDF16
            </a>{' '}
            and Discord{' '}
            <a href="https://discord.gg/KH2YywfrgS" target="_blank" rel="noreferrer">
              https://discord.gg/KH2YywfrgS
            </a>{' '}
            Don't forget to send your friends NXDF discord invitations.
          </span>
        </Flex>
        <Flex>
          <CopyToClipboard text={INVITATION_LINK} onCopy={() => alert('Copied')}>
            <button>Copy this event invitation link</button>
          </CopyToClipboard>
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
