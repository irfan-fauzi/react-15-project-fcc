import React from 'react'
import styled from 'styled-components';

const BtnWrap = () => {
  return (
    <BtWrap>
      <Btn>Tommy</Btn>
      <Btn>Bigdrop</Btn>
      <Btn>Tommy</Btn>
    </BtWrap>
  )
}
const BtWrap = styled.div`
      /* border: red solid 1px; */
      display : flex;
      flex-direction: column;
      gap: 10px;
      @media only screen and (max-width: 868px){
        flex-direction : row;
        justify-content : center;
        margin-bottom : 2rem;
      }
`;
const Btn = styled.div`
      /* border : red solid 1px; */
     
      padding-left : 2rem;
      font-size : 1.5rem;
      cursor : pointer;
      :hover{
        box-shadow: -5px 0px 0px 0px black;
      }
      @media only screen and (max-width: 868px){
        padding : 5px 10px 10px 10px;
        :hover{
          -webkit-box-shadow: 1px 5px 0px -3px #000000; 
           box-shadow: 1px 5px 0px -3px #000000;
        }
        
      }
`;
export default BtnWrap
