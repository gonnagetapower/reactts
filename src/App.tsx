import React, { useEffect, useState } from 'react';
import Card, { CardVariant } from './components/Card';
import UserList from './components/UserList';
import { IUser } from './types/types';
import axios from 'axios';

function App() {
  // const users: IUser[] = [
  //   {id: 1, name: 'Gonnagetapower', email: 'gonnagetapower@gmail.com', address: {city: 'Moskva', street: 'Lenina', zipcode: '21312'}},
  //   {id: 2, name: 'Karpusha', email: 'karpusha201@mail.ru', address: {city: 'Moskva', street: 'Lenina', zipcode: '55552'}}
  // ]
  const [users, setUsers] = useState<IUser[]>([])

  useEffect(() => {
    fetchUser()
  }, [])

  let fetchUser = async () => {
    try {
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
      setUsers(response.data)
    } catch (e) {
      alert(e)
    }
  }


  return (
    <div className="App">
      <Card variant={CardVariant.outlined} width='200px' height='400px' >
        <button>btn</button>
      </Card>
      <UserList users={users} />
    </div>
  );
}

export default App;
