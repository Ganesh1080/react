import React from 'react'
import './App.css'
import Counter from './Counter.jsx'
import RandomNumber from './RandomNumber.jsx'
import Message from './Message.jsx'
import ProductList from './ProductList.jsx'
import StudentsList from './students/StudentList.jsx'
import FruitsList from './Fruits/FruitsList.jsx'
import UserInput from './userinput/UserInput.jsx'
function App() {
  const students = [
  { id: 1, name: "John", grade: "A" },
  { id: 2, name: "Emma", grade: "B" },
  { id: 3, name: "Liam", grade: "C" }
];
const fruits = ["Apple", "Banana", "Mango", "Orange"];


  return (
    <>
     <Counter />
     <RandomNumber />
     <Message />
     <ProductList />
     <StudentsList students={students} />
     <FruitsList fruits={fruits} />
     <UserInput />
    </>
  )
}

export default App
