import React from 'react';
import styled from 'styled-components';
import BtnWrap from './BtnWrap';
import Cards from './Card';
import PositionComp from './PositionComp';

const TabsIndex = () => {
  return (
    <div>
      <Heading><h1>Experience</h1></Heading>
      <MainContainer>
        <BtnWrap />
        <TextWrap>
          <PositionComp />
          <Cards />
        </TextWrap>
      </MainContainer>
    </div>
  )
}
const Heading = styled.div`
      /* border : red solid 1px; */
      max-width : 250px;
      margin: auto;
      display : flex;
      justify-content : center;
      align-items: center;
      height : 80px;
      border-bottom : black solid 2px;
`;

const MainContainer = styled.div`
      display : grid;
      grid-template-columns : 1fr 4fr;
      /* border : black solid 1px; */
      max-width : 1000px;
      margin : 3rem auto;
      @media only screen and (max-width: 868px){
        grid-template-columns: 1fr;
      }
`;



const TextWrap = styled.div`
      border : black solid 1px;
      padding : 10px;
     
`;


export default TabsIndex;
