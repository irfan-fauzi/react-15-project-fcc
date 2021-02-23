import React from 'react';
import { GrEdit } from 'react-icons/gr';
import { MdDeleteSweep } from 'react-icons/md';

const List = ({ data, handleEdit }) => {

  return (
    <>
      <h4>daftar belanjaan :</h4>
      <div>

        {
          data.map(el => (
            <div key={Math.random()} className="card">
              <p key={Math.random()}>{el}</p>
              <div className="icon-wrap">
                <button className="edit" onClick={() => handleEdit(el)}>
                  <GrEdit />
                </button>
                <button className="delete" >
                  <MdDeleteSweep />
                </button>
              </div>
            </div>
          ))
        }

      </div>

    </>
  )
}

export default List
