import React, { useState, useEffect } from 'react';
import List from './List';
import Alert from './Alert';

// ----------- get Local storege ------

const getLocalStorege = () => {
  let myStore = localStorage.getItem('store');
  // if myStore exixst
  if (myStore) {
    return JSON.parse(localStorage.getItem('store'))
  } else {
    return []
  }
}


const App = () => {

  // state ------------------------
  // main state => storage
  const [data, setData] = useState('');

  // versi asli :
  // const [store, setStore] = useState([]);

  // untuk dapat akses local store :
  const [store, setStore] = useState(getLocalStorege())


  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);

  // utulity state
  const [myAlert, setAlert] = useState({

    show: false,
    message: '',
    type: ''

  });





  // --------------------------------
  // Event Listeneer

  // A. handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    //  1. handle if input is empty
    if (!data) {
      // munculkan pesan error 'text masih kosong'
      showAlert(true, "warning", "data tidak ada")
    }

    // 2. handle if you want edit
    // ketika data terisi dan isEdit = true
    else if (data && isEdit) {
      setStore(
        store.map(el => {
          if (el.id === editId) {
            return { ...store, title: data }
          }

          return el
        })
      )
      setData('')
      // setIsEdit(false)
      setEditId(null)
      setIsEdit(false)
    }
    else {
      // buat objec baru
      const newItems = {
        id: Math.random(),
        title: data
      }
      // isi store
      // bisa pakai concat 
      //  setStore(store.concat(data))
      setStore([...store, newItems]);
      // setelah data terisi ke store, kosongkan text field
      setData('')
      setAlert({ show: false })
      // tampilkan ke alert
      showAlert(true, 'success', 'data berhasil di input')
    }
  }

  // handle edit button
  const handleEdit = (id) => {
    const spesifikItem = store.find((el) => el.id === id)
    //setStore(spesifikItem.title)
    setIsEdit(true)
    setEditId(id)
    setData(spesifikItem.title)
  }
  // fungsi alert
  const showAlert = (show = false, type = "", message = "") => {
    setAlert({
      show,
      type,
      message
    })
  }

  // clear all list
  const clearList = () => {
    showAlert(true, 'danger', 'semua data telah dihapus')
    setStore([])
  }

  const removeItem = (id, name) => {
    setStore(store.filter(el => el.id != id))
    showAlert(true, 'danger', `${name} telah dihapus`)
  }

  // -------- Local Storege ------------
  useEffect(() => {
    localStorage.setItem('store', JSON.stringify(store))
  }, [store])

  return (
    <section className="grocery">
      {
        // komponen alert hanya muncul, ketika myAlert.show == true
        //  {...myAlert} = membawa semua state alert
        myAlert.show &&
        <Alert {...myAlert}
          removeAlert={showAlert}
          data={store} />
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

      {
        store.length > 0 && (
          <div className="grocery__container">
            <List mydata={store}
              handleEdit={handleEdit}
              handleDelete={removeItem} />
            <button className="clear-btn" onClick={clearList}>clearItem</button>
          </div>
        )
      }


    </section>
  )
}

export default App
