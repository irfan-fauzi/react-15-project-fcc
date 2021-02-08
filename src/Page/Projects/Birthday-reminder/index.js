import React from 'react';
import styled from 'styled-components';
import PersonList from './PersonList';
import { FriendProvider } from './State';


function Birthday() {
  
  return (
    <FriendProvider>
      <BirthdayPage>
        <h1 className="birthday-title">
          Birthday page
        </h1>
        <CardContact>
          <PersonList />
        </CardContact>
      </BirthdayPage>
    </FriendProvider>
  )
}



const CardContact = styled.div`
      max-width : 500px;
      margin : 2rem auto;
      padding : 10px;
      box-shadow: 10px 10px 16px -1px rgba(0,0,0,0.1);
      background: #ffff;
      `;
const BirthdayPage = styled.div`
    background: #ed5a97;
    height: 1000px;
`;

export default Birthday
