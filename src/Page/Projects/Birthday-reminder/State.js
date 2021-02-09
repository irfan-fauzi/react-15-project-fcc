import React, { useState, useEffect, createContext } from 'react';

export const FriendContext = createContext();

export const FriendProvider = (props) => {
  const [friendList, setFriendList] = useState([]);
  useEffect(() => {
    setFriendList([
      {
        id: 1,
        name: 'Bertie Yates',
        age: 29,
        image:
          'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
      },
      {
        id: 2,
        name: 'Hester Hogan',
        age: 32,
        image:
          'https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
      },
      {
        id: 3,
        name: 'Larry Little',
        age: 36,
        image:
          'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
      },
      {
        id: 4,
        name: 'Sean Walsh',
        age: 34,
        image:
          'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
      },
      {
        id: 5,
        name: 'Lola Gardner',
        age: 29,
        image:
          'https://images.unsplash.com/photo-1561571770-de1eec21bc3d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=889&q=80',
      },
    ])
  }, [])
  return (
    <FriendContext.Provider value={[friendList]}>
      {props.children}
    </FriendContext.Provider>
  )
}