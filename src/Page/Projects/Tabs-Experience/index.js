import React from 'react'
import Main from './Main';
import { ExperienceProvider } from './Context';

const Tabs = () => {
  return (
    <ExperienceProvider>
      <Main />
    </ExperienceProvider>
  )
}

export default Tabs
