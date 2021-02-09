import React from 'react';
import styled from 'styled-components';


const Filter = () => {
  return (
    <Btnwrap>
      <Btn>All</Btn>
      <Btn>Breakfast</Btn>
      <Btn>Lunch</Btn>
      <Btn>Shakes</Btn>
    </Btnwrap>
  )
}

const Btnwrap = styled.div`
      display : flex;
      border : salmon 1px solid;
      justify-content : space-evenly;
      width : 400px;
      margin : 2rem auto;
`;
const Btn = styled.button`
      border : none;
      background : white;
`;

export default Filter
