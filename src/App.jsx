import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Page from './Page'
import StartPage from './StartPage'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<StartPage />}></Route>
          <Route path='/:restName/:restId' element={<Page />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
