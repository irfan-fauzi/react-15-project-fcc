import React, { useState } from 'react';
import Data from './Data';
import Answer from './Answer';

const Question = () => {
  const [data, setData] = useState(Data);
  const Show = (e) => {
    e.target.parentElement.nextElementSibling.classList.toggle('show')
  }

  return (
    <main className="god-qa">
      <section className="qa">
        <h1 className="title">questions and answers about login</h1>
        <div className="question-main">
          {
            data.map(el => (
              <Answer key={el.id} onClick={Show} title={el.title} info={el.info} />
            ))
          }
        </div>
      </section>
    </main>
  )
}

export default Question
