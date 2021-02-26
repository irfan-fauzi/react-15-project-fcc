import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const List = ({ mydata, handleEdit, handleDelete }) => {
  return (
    <div className="grocery-list">
      <h2>List Component</h2>

      {
        mydata.map(el => (
          <article
            key={Math.random()} className="grocery-item">
            <p>{el.title}</p>
            <div className="bt-container">
              <button
                className="edit-btn"
                onClick={() => handleEdit(el.id)} >
                <FaEdit />
              </button>
              <button
                className="delete-btn"
                onClick={() => handleDelete(el.id, el.title)}>
                <FaTrash />
              </button>
            </div>
          </article>
        ))
      }

    </div>
  )
}

export default List
