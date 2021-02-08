import React, { useContext } from 'react';
import ContactList from './ContactList';
import { FriendContext } from './State';

function PersonList() {
  const [friend, setFriend] = useContext(FriendContext);
  return (
    <>
      <h4>{friend.length} bithday today</h4>
      {
        friend.map(el => (
          <ContactList key={el.id} img={el.image} name={el.name} years={el.age} />
        ))
      }
    </>
  )
}

export default PersonList
