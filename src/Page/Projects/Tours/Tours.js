import React, { useContext } from 'react';
import styled from 'styled-components';
import { TourContext } from './Context';
import ListTour from './ListTour';


const Tours = () => {
  const [tour, setTour, loading] = useContext(TourContext);
  console.log(tour)
  if (loading) {
    return (
      <main>
        <h1>Sedang Loading ..</h1>
      </main>
    )
  }
  return (
    <div className="container-tours">
      <Heading>Our Tours</Heading>
      {
        tour.map(el => (
          <ListTour key={el.id} img={el.image} name={el.name} info={el.info} price={el.price}/>
        ))
      }
    </div>
  )
}

const Heading = styled.h1`
      text-align : center;
      margin : 2rem;
`;


export default Tours
