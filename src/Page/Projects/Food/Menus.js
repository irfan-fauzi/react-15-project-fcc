import React from 'react';
import styled from 'styled-components';

const Menus = ({ img, title, desc, price }) => {
  return (
    <div className="card">
      <ImgWrap>
        <img src={img} alt="img" />
      </ImgWrap>
      <div className="text-wrap">
        <NamePrice>
          <h3>{title}</h3>
          <h3>${price}</h3>
        </NamePrice>
        <p>{desc}</p>
      </div>
    </div>
  )
}

const NamePrice = styled.div`
      display : flex;
      justify-content : space-between;
      margin : 0.3rem 0;
      color : #4f4d4b;
      text-transform : capitalize;
      border-bottom : #bdb8b3 solid 1px;
`;

const ImgWrap = styled.div`
      /* height : 250px; */
      overflow : hidden;
      cursor : pointer;
      height : 150px;
      display : flex;
      justify-content : center;
      align-items : center;
      border-radius : 20px;
`;


export default Menus
