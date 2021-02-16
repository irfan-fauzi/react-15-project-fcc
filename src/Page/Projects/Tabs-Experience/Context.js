import React, { useEffect, useState, createContext } from 'react';

export const ExperienceContext = createContext();

export const ExperienceProvider = (props) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const url = 'https://course-api.com/react-tabs-project';

  const fetchData = async () => {
    setLoading(true);
    try {
      await fetch(url).then(res => res.json()).then(res => setData(res))
      setLoading(false)
    }
    catch (err) {
      setLoading(false)
    }
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <ExperienceContext.Provider value={[data, loading]}>
      {props.children}
    </ExperienceContext.Provider>
  )
}