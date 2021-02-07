
import styled from 'styled-components';
import PersonList from './PersonList';
import { FriendProvider } from './State';


function Birthday() {


  return (
    <FriendProvider>
      <BirthdayPage>
        <h1>Birthday page</h1>
        <CardContact>
          <h4>5 bithday today</h4>
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
    
      background: #ffff;
      `;
const BirthdayPage = styled.div`
    background: #ed5a97;
    height: 1000px;
`;

export default Birthday
