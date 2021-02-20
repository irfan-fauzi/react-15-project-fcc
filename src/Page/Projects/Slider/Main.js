import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import Data from './Data';

const Main = () => {

  //const [data, setData] = useState(Data)
  const [val, setVal] = useState(0);

  const Tambah = () => {
    setVal(val + 1)
    if (val > Data.length - 2) {
      setVal(0)
    }
  }

  const Kurang = () => {
    setVal(val - 1)
    if (val <= 0) {
      setVal(Data.length - 1)
    }
  }

  const { name, job, text, image } = Data[val];


  return (
    <div className="review-slide">
      <h1 className="title">Our Review</h1>

      <div className="card-review">
        <div className="img-wrap">
          <img src={image} alt={name} />
          <span className="quote-icon">
            <FaQuoteRight className="quote" />
          </span>
        </div>
        <h4>{job}</h4>
        <p>{text}</p>
        <div className="btn-wrap">
          <FaChevronLeft className="btn-left"
            onClick={Kurang} />
          <FaChevronRight className="btn-right" onClick={Tambah} />
        </div>
        <button className="btn">Suprise me</button>
      </div>
    </div>
  )
}

export default Main
