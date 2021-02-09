import React from 'react';
import styled from 'styled-components';

const Menus = ({ img, title, desc, price }) => {
  return (
    <div className="card">
      <ImgWrap>
        <img src={img} alt="img" />
      </ImgWrap>
      <div className="text-wrap">
        <div className="flex">
          <h3>{title}</h3>
          <h3>{price}</h3>
        </div>
        <p>{desc}</p>
      </div>
    </div>
  )
}

const ImgWrap = styled.div`
      /* height : 250px; */
      overflow : hidden;
      
      height : 150px;
      display : flex;
      justify-content : center;
      align-items : center;
      border : red solid 1px;
`;


export default Menus
