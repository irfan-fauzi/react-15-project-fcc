import React, { useState, useEffect } from 'react'
import Filter from './Filter';
import styled from 'styled-components';
import Menus from './Menus';
import Data from './Data';

const GridMenu = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(Data);
  }, [])
  return (
    <>
      <h1 className="grid-title">Our Menu</h1>
      <Filter />
      <Grid>
        {
          data.map(el => (
            <Menus key={el.id} title={el.title} price={el.price} img={el.img} desc={el.desc} />
          ))
        }

      </Grid>
    </>
  )
}

const Grid = styled.div`
      border : blue solid 1px;
      max-width : 1200px;
      margin: auto;
      display : grid;
      gap : 10px;
      grid-template-columns : repeat(auto-fill, minmax(400px,1fr));
`;



export default GridMenu;
