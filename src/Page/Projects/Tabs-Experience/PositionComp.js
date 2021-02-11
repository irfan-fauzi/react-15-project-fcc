import React from 'react'
import styled from 'styled-components';

const PositionComp = () => {
  return (
    <Position>
      <h3>Engineering Intern</h3>
      <BtnPosition>Cuker</BtnPosition>
      <p>May 2014 - September 2015</p>
    </Position>
  )
}
const BtnPosition = styled.button`
      background : lightblue;
      margin : 20px 0;
      padding : 5px 20px;
      outline : 2px blue solid;
      border : none;
      cursor : pointer;
`;

const Position = styled.div`
      /* border : red solid 1px; */
`;
export default PositionComp
