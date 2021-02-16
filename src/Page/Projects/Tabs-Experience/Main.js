import React, { useContext, useEffect, useState } from 'react'
import Articles from './Articles';
import Btn from './Btn'
import { ExperienceContext } from './Context'

const Main = () => {
  const [data, loading] = useContext(ExperienceContext);
  const [dataFilter, setDataFIlter] = useState([]);
  const [fil, setFil] = useState(false);



  function Filter(e) {
    let filt = data.filter(el => {
      return el.company === e.target.value;
    })
    setDataFIlter(filt);
    setFil(true)
    e.target.classList.add("blue")
    console.log(e.target)
  }

  const Pertama = data.filter((el) => {
    return el.order === 1;
  })

  if (loading) {
    return (
      <main><h1>Sedang loading...</h1></main>
    )
  }



  return (
    <div className="tabs-experience">
      {

        data.map(el => (
          <Btn key={Math.random()} company={el.company} onClick={Filter} value={el.company} />

        ))
      }

      { !fil ?

        Pertama.map(el => (
          <Articles key={Math.random()} company={el.company} title={el.title} dates={el.dates} isi={el.duties} />
        ))

        :
        dataFilter.map(el => (
          <Articles key={Math.random()} company={el.company} title={el.title} dates={el.dates} isi={el.duties} />
        ))
      }

    </div>
  )
}

export default Main
