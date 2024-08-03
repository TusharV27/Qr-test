import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<div>Home</div>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
