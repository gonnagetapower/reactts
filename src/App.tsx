import React, { useEffect, useState } from 'react';
import Card, { CardVariant } from './components/Card';
import List from './components/List';
import EventsExample from './components/EventsExample';
import { ITodo, IUser } from './types/types';
import axios from 'axios';
import UserItem from './components/UserItem';
import TodoItem from './components/TodoItem';
import { Route, Routes, Link } from 'react-router-dom';
import UsersPage from './pages/UsersPage';
import TodosPage from './pages/TodosPage';
import UserItemPage from './pages/UserItemPage';
import TodoItemPage from './pages/TodoItemPage';

function App() {
  // const users: IUser[] = [
  //   {id: 1, name: 'Gonnagetapower', email: 'gonnagetapower@gmail.com', address: {city: 'Moskva', street: 'Lenina', zipcode: '21312'}},
  //   {id: 2, name: 'Karpusha', email: 'karpusha201@mail.ru', address: {city: 'Moskva', street: 'Lenina', zipcode: '55552'}}
  // ]
  {/* <EventsExample />
      <Card variant={CardVariant.outlined} width='200px' height='400px' >
        <button>btn</button>
      </Card> */}
  return (
    <div className="App">
      <div className="navigate">
        <Link to="/users">Пользователи</Link>
        <Link to="/todos">Список дел</Link>
      </div>
      <Routes>
        <Route path='/users' element={<UsersPage />} />
        <Route path='/todos' element={<TodosPage />} />
        <Route path='/users/:id' element={<UserItemPage />} />
        <Route path='/todo/:id' element={<TodoItemPage />} />
      </Routes>
    </div>
  );
}

export default App;
