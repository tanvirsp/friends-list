import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import fackData from './fakeData.json';
import Friends from './components/Friends/Friends';


function App() {
  const [friends, setFriends ] = useState([]);
  const [addFriend, setAddFriend] = useState([]);

  const handleFriendList = (friend)=>{
    
    const newFriendList = [...addFriend, friend];
    setAddFriend(newFriendList);
  };

  const total = addFriend.reduce((total, friend) => total + friend.salary , 0);

  useEffect( () =>{
    setFriends(fackData);
  } ,[]);



  return (
    <div>
      <Header></Header>
      <div className="container">
        <div className="selected-list">
          <h2>Selected Number of Friends : {addFriend.length}</h2>
          <h2>Total Salary : {total}</h2>
        </div>
        <div className="friends-list">
          {
            friends.map(friend => <Friends friend = {friend} key = {friend.id} handleFriendList ={handleFriendList}></Friends>)
          }
        </div>
      </div>
    
    </div>
  );
}

export default App;
