import React, { useEffect, useState } from 'react';
import Card, { CardVariant } from './components/Card';
import List from './components/List';
import UserList from './components/UserList';
import { ITodo, IUser } from './types/types';
import axios from 'axios';
import UserItem from './components/UserItem';
import TodoItem from './components/TodoItem';

function App() {
  // const users: IUser[] = [
  //   {id: 1, name: 'Gonnagetapower', email: 'gonnagetapower@gmail.com', address: {city: 'Moskva', street: 'Lenina', zipcode: '21312'}},
  //   {id: 2, name: 'Karpusha', email: 'karpusha201@mail.ru', address: {city: 'Moskva', street: 'Lenina', zipcode: '55552'}}
  // ]
  const [users, setUsers] = useState<IUser[]>([])
  const [todos, setTodos] = useState<ITodo[]>([])

  useEffect(() => {
    fetchUser()
    fetchTodos()
  }, [])

  let fetchUser = async () => {
    try {
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
      setUsers(response.data)
    } catch (e) {
      alert(e)
    }
  }

  let fetchTodos = async () => {
    try {
      const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
      setTodos(response.data)
    } catch (e) {
      alert(e)
    }
  }


  return (
    <div className="App">
      <Card variant={CardVariant.outlined} width='200px' height='400px' >
        <button>btn</button>
      </Card>
      <List
        items={users}
        renderItem={(user: IUser) => <UserItem user={user} key={user.id} />}
      />
      <List
        items={todos}
        renderItem={(todos: ITodo) => <TodoItem todos={todos} key={todos.id} />}
      />
    </div>
  );
}

export default App;
