import React from 'react';
import './App.css';
import Header from './components/todolist/Header';
import TodoList from './components/todolist/TodoList';

function App():JSX.Element {
  return (
    <div className="App">
      <Header />
      
      <TodoList />


      <Header />
    </div>
  );
}

export default App;