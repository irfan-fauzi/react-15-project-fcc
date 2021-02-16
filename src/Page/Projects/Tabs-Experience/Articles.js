import React from 'react'

const Articles = ({ company, title, dates, isi }) => {


  return (
    <>
      <h2>{title}</h2>
      <h3>{company}</h3>
      <p>{dates}</p>
      <ul className="container-duties">

        {
          isi.map(el => (
            <li className="list-duties" key={Math.random()}>{el}</li>
          ))
        }

      </ul>
    </>
  )
}

export default Articles
