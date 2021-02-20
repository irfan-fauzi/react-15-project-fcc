import React, { useState, useEffect } from 'react';
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';
import { BsChatSquareQuote } from 'react-icons/bs';
import Data from './Data';

const Main = () => {

  const [data, setData] = useState(Data);
  const [num, setNum] = useState(0);

  useEffect(() => {
    const lastIndex = data.length - 1;
    if (num < 0) {
      setNum(lastIndex);
    }
    if (num > lastIndex) {
      setNum(0)
    }
  }, [num, data]);

  useEffect(() => {
    let slider = setInterval(() => {
      setNum(num + 1);
    }, 3000);

    // clear subscription data
    return () => {
      clearInterval(slider);
    }
  }, [num])
  console.log(num)


  return (
    <section className="slider-auto">
      <div className="title-wrap">
        <h2>Review</h2>
      </div>
      <div className="section-center">
        {
          data.map((el, i) => {
            const { id, image, name, title, quote } = el;
            // class position untuk css
            let position = 'nextSlide';
            if (i === num) {
              position = 'activeSlide';
            }
            if (i === num - 1 ||
              (num === 0 && i === data.length - 1)) {
              position = 'lastSlider';
            }
            return (
              <article className={position} key={id}>
                <img src={image} alt={name} className="person-img" />
                <h4>{name}</h4>
                <p className="title">{title}</p>
                <p className="text">{quote}</p>
                <BsChatSquareQuote className="icon" />
              </article>
            );
          })
        }
        <button className="prev" onClick={() => setNum(num - 1)}>
          <FaChevronCircleLeft />
        </button>
        <button className="next" onClick={() => setNum(num + 1)}>
          <FaChevronCircleRight />
        </button>
      </div>

    </section>
  )
}

export default Main
