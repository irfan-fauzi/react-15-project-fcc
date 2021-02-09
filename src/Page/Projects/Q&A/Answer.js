import React from 'react'

const Answer = ({ onClick, title, info }) => {
  return (
    <div className="card">
      <div className="question">
        <h3>{title}</h3>
        <i className="fas fa-plus-circle" onClick={onClick}></i>
      </div>
      <div className="answer show">
        <p>{info}</p>
      </div>
    </div>
  )
}

export default Answer
