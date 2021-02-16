import React from 'react'

const Btn = ({ company, onClick, value }) => {


  return (
    <>
      <button className="btn" onClick={onClick} value={value} >{company}</button>
    </>
  )
}

export default Btn
