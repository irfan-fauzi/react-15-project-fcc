import React, { useEffect, useState } from 'react'

const App = () => {

  const [data, setData] = useState([]);

  const [store, setStore] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault()
    setStore(store.concat(data))

    // console.log(store)
  }


  return (

    <div className="crud-todo" onSubmit={handleSubmit}>
      <h1>todo</h1>
      <form className="form">
        <input type="text" value={data} onChange={(e) => setData(e.target.value)} />
        <input type="submit" value="post" />
      </form>
      <article>
        <ul className="card">
          {
            store.map(el => (
              <li className="list" key={Math.random()}>{el}</li>
            ))
          }
        </ul>
      </article>
    </div>
  )
}

export default App
