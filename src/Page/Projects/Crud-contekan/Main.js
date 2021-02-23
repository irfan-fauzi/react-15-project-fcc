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
      setAlert({ show: true, msg: 'data kosong', type: 'red' })
    } else if (data) {
      setStore(store.concat(data))
      setData('')
    }
  }

  // const Edit = () => {
  //   setIsEdit(true)
  //   setData()
  // }

  // const Delete = () => {
  //   console.log("delete")
  // }

  const handleEdit = (name) => {
    console.log(name)
    setData(name)
  }


  return (
    <div className="crud-contekan">
      <form onSubmit={handleSubmit} className="form">
        {
          alert && <Alert />
        }
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
