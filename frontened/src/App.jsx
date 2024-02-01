import { useState } from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Signup from './components/Signup'
import { AppBar } from '@mui/material'
import Appbar from './components/Appbar'
import Login from './components/Login'
import AddIncome from './components/AddIncome'
import ExpenseAndIncome from './components/Expense'

function App() {
  
  return (
    
      <div>
        
       <Router>
        <Appbar />
          <Routes>
            <Route path='/' element={<div>Welcome to expense Tracker App</div>}></Route>
            <Route path='/expensetracker' element={<ExpenseAndIncome />}></Route>
            <Route path='/addincome' element={<AddIncome />}></Route>
          <Route path={'/signup'} element = {<Signup />}></Route>
          <Route path={'/login'} element = {<Login />}></Route>
          </Routes>
          
       </Router>
      </div>
   
  )
}

export default App
