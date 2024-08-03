import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Page from './Page'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Page />}></Route>
          <Route path='/:restName/:restId' element={<Page />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
