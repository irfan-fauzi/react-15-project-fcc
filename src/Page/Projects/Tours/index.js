import React from 'react'
import Tours from './Tours';
import { TourProvider } from './Context';


const index = () => {
  return (
    <TourProvider>
      <>
        <Tours />
      </>
    </TourProvider>
  )
}

export default index
