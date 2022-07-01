import './App.css';
import Create from './components/Create'
import Read from './components/Read'
import Update from './components/Update'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React from 'react'

function App() {
  return (
    <Router>
      <div className="main">
        <h2 className="main-header">React Crud Operations</h2>
        <Routes>
          <Route path='/create' element={<Create />}></Route>
          <Route path='/read' element={<Read />}></Route>
          <Route path='/update' element={<Update />}></Route>
        </Routes>

      </div>
    </Router>

  )
}

export default App
