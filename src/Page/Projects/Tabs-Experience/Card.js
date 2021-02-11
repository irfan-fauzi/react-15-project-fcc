import React from 'react'
import styled from 'styled-components';

const Cards = () => {
  return (
    <>
      <Card>
        <IconsWrap><i class="fas fa-angle-double-right"></i></IconsWrap>
        <div>
          <p>Tote bag sartorial mlkshk air plant vinyl banjo lumbersexual poke leggings offal cold-pressed brunch neutra. Hammock photo booth live-edge disrupt.</p>
        </div>
      </Card>
      <Card>
        <IconsWrap><i class="fas fa-angle-double-right"></i></IconsWrap>
        <div>
          <p>Tote bag sartorial mlkshk air plant vinyl banjo lumbersexual poke leggings offal cold-pressed brunch neutra. Hammock photo booth live-edge disrupt.</p>
        </div>
      </Card>
      <Card>
        <IconsWrap><i class="fas fa-angle-double-right"></i></IconsWrap>
        <div>
          <p>Tote bag sartorial mlkshk air plant vinyl banjo lumbersexual poke leggings offal cold-pressed brunch neutra. Hammock photo booth live-edge disrupt.</p>
        </div>
      </Card>
    </>
  )
}
const Card = styled.div`
      display : flex;
     
      align-items : center;
      justify-content: space-between;
      margin: 10px;
      margin-top : 2rem;
     
`;


const IconsWrap = styled.div`
       /* border : red solid 1px; */
       margin-right : 1.5rem;
`;
export default Cards
