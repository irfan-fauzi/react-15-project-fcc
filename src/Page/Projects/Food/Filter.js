import React from 'react';
import styled from 'styled-components';


const Filter = ({ onClick }) => {
  return (
    <Btnwrap>
      <Btn value="" onClick={onClick}>All</Btn>
      <Btn value="breakfast" onClick={onClick}>Breakfast</Btn>
      <Btn value="lunch" onClick={onClick}>Lunch</Btn>
      <Btn value="shakes" onClick={onClick}>Shakes</Btn>
    </Btnwrap>
  )
}

const Btnwrap = styled.div`
      display : flex;
      /* border : salmon 1px solid; */
      justify-content : space-evenly;
      width : 400px;
      margin : 2rem auto;
`;
const Btn = styled.button`
      border : none;
      background : white;
      font-size : 1rem;
      cursor : pointer;
      color : #ad7734;
      padding : 5px 10px;
      transition : 0.3s ease-in-out;
      &:hover{
        background : #ad7734;
        color : #ffff;
      }
`;

export default Filter
