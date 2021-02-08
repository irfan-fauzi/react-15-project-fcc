import React, { useEffect, useState, createContext } from 'react';

export const TourContext = createContext();

export const TourProvider = (props) => {
  const [loading, setLoading] = useState(true);
  const [tour, setTour] = useState([]);

  // fetch
  const fetchTours = async () => {
    setLoading(true)
    try {
      // jika berhasil
      await fetch('https://course-api.com/react-tours-project')
        .then(res => res.json())
        .then(res => setTour(res))
        setLoading(false)
    } catch (err) {
      setLoading(false)
      console.log(err)
    }
  }

  useEffect(() => {
    fetchTours()
  }, [])

  return (
    <div>
      <TourContext.Provider value={[tour, setTour, loading]}>
        {props.children}
      </TourContext.Provider>
    </div>
  )
}



