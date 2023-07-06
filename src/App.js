import React from 'react';
import { Header } from './Header';
import ToDoList from './ToDoList';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css';


export default function App() {
  return (
    <>
      <Header />
      <ToDoList />
    </>
  );
}