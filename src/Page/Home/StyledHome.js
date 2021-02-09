import styled from 'styled-components';

export const CardContainer = styled.div`
      display : grid;
      /* grid-template-columns : repeat(auto-fill, minmax(300px, 1fr));
      gap : 10px; */
      gap : 10px;
      `;
export const Card = styled.div`
      /* border : grey solid 1px; */
      background: #eaeaea;
      padding : 1rem;
      cursor : pointer;
      transition : 0.2s ease-in-out;
      box-shadow: 11px 13px 10px -7px rgba(186,164,164,0.75);
      &:hover{
        transform : scale(1.1);
        background : #ffff;
        color: salmon;
      }
      `;