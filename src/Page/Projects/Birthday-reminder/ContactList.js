import React from 'react';
import styled from 'styled-components';

const ContactList = ({ img, name, years }) => {
  return (
    <CardContact>
      <Imgwrap>
        <ImageCard className="img" src={img} alt="img" />
      </Imgwrap>
      <TextWrap>
        <Name>{name}</Name>
        <Age>{years} years</Age>
      </TextWrap>
    </CardContact>
  )
}

const Name = styled.h1`
      color : #3d3a3a;
      font-size : 1rem;
`;

const Age = styled.p`
      font-weight : 200;
      color : #9c8a8a;
`;

const TextWrap = styled.div`
     
      display : flex;
      flex-direction : column;
      justify-content : center;
      align-items : flex-start;
      margin-left: 1.5rem;
`;
const CardContact = styled.div`
      padding : 10px;
      display: flex;
      margin-top: 1.5rem;
      width : 100%;
      font-family: 'Roboto Mono', monospace;
      background : #ffff;
     
`;
const ImageCard = styled.img`
      max-width : 100%;
      /* display : inline-block; */
      object-fit : cover;
`;
const Imgwrap = styled.div`
      border : grey solid 1px;
      border-radius : 50%50%;
      width : 110px;
      height : 110px;
      overflow : hidden;
      display : flex;
      justify-content : center;
      align-items: center;
`;

export default ContactList
