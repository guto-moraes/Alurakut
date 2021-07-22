import { createGlobalStyle } from 'styled-components'
import React from "react";
import {Helmet} from "react-helmet";
 
class Application extends React.Component {
  render () {
    return (
        <div className="application">
            <Helmet>
                <title>Alurakut | Uma comunidade que nunca envelhece</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,700;1,400&display=swap" />
            </Helmet>
        </div>
    );
  }
}

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Rubik', sans-serif;
  }
`
export default function App({ Component, pageProps }) {
  return (
    <>
      <Application />
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}
