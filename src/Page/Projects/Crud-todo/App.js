import React, { useState } from 'react';
import List from './List';
import Alert from './Alert';


const App = () => {

  // state ------------------------
  // main state => storage
  const [data, setData] = useState('');
  const [store, setStore] = useState([]);

  const [isEdit, setIsEdit] = useState(false);
  const [editid, setEditId] = useState(null);

  // utulity state
  const [myAlert, setAlert] = useState({

    show: false,
    message: '',
    type: ''

  });

  console.log(store)

  // --------------------------------
  // Event Listeneer
  const handleClearAll = () => {

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    //  1. handle if input is empty
    if (!data) {
      // munculkan pesan error 'text masih kosong'
      setAlert({
        show: true,
        message: "harap di isi terlebih dulu",
        type: 'red'
      })
    }
    // 2. handle if you want edit
    // ketika data terisi dan isEdit = true
    else if (data && isEdit) {

    }
    else {
      const newItems = {
        id: Math.random(),
        title: data
      }
      // isi store
      // bisa pakai concat 
      //  setStore(store.concat(data))
      setStore([...store, newItems])
    }
  }



  return (
    <section className="grocery">
      {
        // komponen alert hanya muncul, ketika myAlert.show == true
        myAlert.show && <Alert msg={myAlert.message} />
      }
      <h3 className="title">Pusat grosir</h3>
      <form className="grocery__form" onSubmit={handleSubmit}>

        <input type="text"
          onChange={(e) => setData(e.target.value)}
          value={data}
          className="input-form" />
        <input type="submit"
          className="btn-form"
          value={isEdit ? 'edit' : 'submit'} />


      </form>

      <div className="grocery__container">
        <List />
        <button className="clear-btn" onClick={handleClearAll}>clearItem</button>
      </div>

    </section>
  )
}

export default App
