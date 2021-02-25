import React, { useState } from 'react';
import List from './List';
import Alert from './Alert';

const Main = () => {
  // data = state penampung sementara untuk di oper ke store
  const [data, setData] = useState('');
  // store = penampung data utama
  const [store, setStore] = useState([]);

  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);

  // utility state
  const [alert, setAlert] = useState({
    show: false,
    msg: '',
    type: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!data) {
      // display alert
      setAlert({ show: true, msg: 'data kosong', type: 'red' })

    } else if (data && isEdit) {
      // deal with edit
      console.log("deal with edit")
    }

    else if (data) {
      setStore(store.concat(data))
      setData('')
      setAlert({ show: false })
    }
  }



  const handleEdit = (name) => {
    //console.log(name)
    setIsEdit(true)
    setData(name)


  }


  return (
    <div className="crud-contekan">
      {
        alert.show && <Alert />
      }
      <form onSubmit={handleSubmit} className="form">

        <input type="text" value={data} onChange={(e) => setData(e.target.value)} className="input-crud" />
        <input type="submit" value={isEdit ? 'edit' : 'submit'} className="btn-submit" />

      </form>
      <div className="container">
        <List data={store} handleEdit={handleEdit} />
        <button className="clear-btn">Clear all</button>
      </div>
    </div>
  )
}

export default Main
