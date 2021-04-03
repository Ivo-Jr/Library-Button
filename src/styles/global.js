import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Gravitas+One&family=Libre+Barcode+39+Text&family=Norican&family=Petit+Formal+Script&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    background: #031321;
    font-family: 'Libre Barcode 39 Text', cursive;
    /* font-family: 'Gravitas One', cursive; */
    /* font-family: 'Petit Formal Script', cursive; */
    /* font-weight: 900; */
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }

  a {
    position: relative;
    display: inline-block;
    padding: 50px 100px;
    color: #2196f3;
    /* text-transform: uppercase; */
    letter-spacing: 6px;
    text-decoration: none;
    font-size: 170px;
    overflow: hidden;
    transition: 0.2s;
    border-radius: 7px;
  }

  a:hover{
    color: #255784;
    background: #2196f3;
    box-shadow: 0 0 10px #2196f3, 0 0 40px #2196f3, 0 0 80px #2196f3;
    transition-delay: 0.6s;
  }

  a span {
    position: absolute;
    display: block;
  }

  a span:nth-child(1)
  {
    top: 0;
    left: -100%;
    width: 100%;
    height: 6px;
    background: linear-gradient(90deg, transparent, #2196f3);
  }
  a:hover :nth-child(1)
  {
    left:100%;
    transition:1s
  }
  
  a span:nth-child(2)
  {
    bottom: 100%;
    right: 0;
    width: 6px;
    height: 100%;
    background: linear-gradient(180deg, transparent, #2196f3);
  }
  a:hover :nth-child(2)
  {
    bottom: -100%;
    transition: 1s;
    transition-delay: 0.3s;
  }

  a span:nth-child(3)
  {
    bottom: 0;
    right: -100%;
    width: 100%;
    height: 6px;
    background: linear-gradient(270deg, transparent, #2196f3);
  }
  a:hover :nth-child(3)
  {
    right: 100%;
    transition: 1s;
    transition-delay: 0.3s;
  }
  

  a span:nth-child(4)
  {
    top: 100%;
    left: 0;
    width: 6px;
    height: 100%;
    background: linear-gradient(0deg, transparent, #2196f3);
  }
  a:hover :nth-child(4)
  {
    top: -100%;
    transition: 1s;
    transition-delay: 0.3s;
  }

`;
