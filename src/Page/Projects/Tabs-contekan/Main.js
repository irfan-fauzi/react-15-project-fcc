import React, { useEffect, useState } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';


const Main = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [val, setVal] = useState(0);

  const GetDataApi = async () => {
    try {
      await fetch('https://course-api.com/react-tabs-project')
        .then(res => res.json())
        .then(res => setData(res))
      setLoading(false)
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    GetDataApi()
  }, [])

  if (loading) {
    return (
      <section className="section loading"><h1>Sedang Loading...</h1></section>
    )
  }

  // destruction array => kemudian isi array akan mengikuti index val yang terus di looping di bawah

  const { company, dates, duties, title } = data[val];
  //console.log(title, dates, duties)
  return (
    <section className="section-experience">
      <div className="title-wrap">
        <h2>Experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <div className="btn-container">
          {
            data.map((el, index) => (
              <button key={Math.random()}
                onClick={() => setVal(index)}
                className={`job-btn ${index === val && 'active-btn'}`}
              >{el.company}</button>
            ))
          }
        </div>

        {/* job info */}

        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {
            duties.map((el) => (
              <div className="job-desc" key={Math.random()}>
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{el}</p>
              </div>
            ))
          }

        </article>
      </div>
      <button type="button" className="btn">More info</button>
    </section>
  )
}

export default Main
