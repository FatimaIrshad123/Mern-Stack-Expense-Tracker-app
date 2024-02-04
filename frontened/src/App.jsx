import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Signup from './components/Signup'
import Appbar from './components/Appbar'
import Login from './components/Login'
import Expense from './components/Expense'

function App() {
  
  return (
    
      <div>
        
       <Router>
        <Appbar />
          <Routes>
            <Route path='/' element={<div>Welcome to expense Tracker App</div>}></Route>
            <Route path='/expensetracker' element={<Expense />}></Route>
            <Route path={'/signup'} element = {<Signup />}></Route>
            <Route path={'/login'} element = {<Login />}></Route>
          </Routes>
       </Router>
      </div>
   
  )
}

export default App
