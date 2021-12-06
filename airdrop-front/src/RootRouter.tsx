import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import styled from 'styled-components'
import Done from './routes/Done'
import Main from './routes/Main'
import GlobalStyle from './style/GlobalCss'
import ResetCSS from './style/ResetCss'
interface Props {}

const RootRouter = (props: Props) => {
  return (
    <BrowserRouter>
      <ResetCSS />
      <GlobalStyle />
      <Routes>
        <Route
          path="/"
          element={
            <BackgroundWrapper>
              <Main />
            </BackgroundWrapper>
          }
        />
        <Route
          path="/result"
          element={
            <BackgroundWrapper>
              <Done />
            </BackgroundWrapper>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default RootRouter

const BackgroundWrapper = styled.div`
  background-color: #151f42;
  color: white;
  min-width: 100vw;
  min-height: 100vh;
`
