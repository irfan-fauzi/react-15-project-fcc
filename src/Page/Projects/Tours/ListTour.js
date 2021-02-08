import React, { useState } from 'react';
import styled from 'styled-components';

const ListTour = ({ img, info, name, price }) => {

  // state readmore
  const [readmore, setReadmore] = useState(false);
  const Delete = (e) => {
    e.target.parentElement.parentElement.style.display = 'none';
  }
  return (
    <article className="tour-cards">
      <div className="img-wrap">
        <img src={img} alt="img" />
      </div>
      <TextWrap>
        <h3>{name}</h3>
        <h3 className="price">${price}</h3>
      </TextWrap>
      <div>
        <p>{readmore ? info : `${info.substring(0, 200)}...`}
          <button className="read" onClick={() => setReadmore(!readmore)}>
            {readmore ? '...showless' : ' read more'}
          </button>
        </p>
        <Button onClick={Delete}>Not Interested</Button>
      </div>
    </article>
  )
}


// styled

const TextWrap = styled.div`
      display : flex;
      justify-content : space-between;
      margin: 1rem 0;
`;
const Button = styled.button`
      margin : 1rem 0;
      padding : 6px 30px;
      border: red solid 1px;
      /* border-radius : 10px; */
      color : red;
      background : transparent;
      cursor :pointer;
      transition : 0.3s ease-in-out;
      font-size: 1rem;
      &:hover{
        background : salmon;
        color: white;
        transform: scale(0.98);
      }  

`;
export default ListTour
