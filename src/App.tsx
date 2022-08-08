import React from 'react';
import Card, {CardVariant} from './components/Card';
import UserList from './components/UserList';
import { IUser } from './types/types';

function App() {
  const users: IUser[] = [
    {id: 1, name: 'Gonnagetapower', email: 'gonnagetapower@gmail.com', address: {city: 'Moskva', street: 'Lenina', zipcode: '21312'}},
    {id: 2, name: 'Karpusha', email: 'karpusha201@mail.ru', address: {city: 'Moskva', street: 'Lenina', zipcode: '55552'}}
  ]
  return (
    <div className="App">
      <Card variant={CardVariant.outlined} width='200px' height='400px' >
        <button>btn</button>
        </Card>
        <UserList users={users}/>
    </div>
  );
}

export default App;
