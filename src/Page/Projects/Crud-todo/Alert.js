import React, { useEffect } from 'react'

const Alert = ({ message, type, removeAlert, store }) => {

  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert(false, '', '')
    }, 2000)
    return () => clearTimeout(timeout)
  }, [store])
  return (
    <>
      <p className={`alert alert-${type}`}>{message}</p>
    </>
  )
}

export default Alert
