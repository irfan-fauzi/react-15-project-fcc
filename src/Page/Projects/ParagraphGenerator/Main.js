import React, { useEffect, useState } from 'react';
import Data from './Data';

const Main = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);
  const [hasilFilter, setHasilFilter] = useState([]);

  useEffect(() => {
    setText(Data);
  }, [text])
  // console.log(text.length)

  const handleSubmit = (e) => {
    e.preventDefault();
    const filt = text.filter((el, i) => {
      return i < count;
    })
    setHasilFilter(filt)
  }

  console.log(hasilFilter, count)



  return (
    <section className="lorem-generator">
      <h3>anda bosan menganggur ? </h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraph</label>
        <input type="number" name="amount" id="amount" value={count} onChange={(e) => setCount(e.target.value)} required />
        <input type="submit" value="masukan" className="lorem-btn" />
      </form>
      <article className="articles-wrap">
        <ul>
          {
            hasilFilter.map(el => (
              <li className="list" key={Math.random()}>{el}</li>
            ))
          }
        </ul>
      </article>
    </section>
  )
}

export default Main
