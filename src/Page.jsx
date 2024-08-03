import React from 'react'
import { useParams } from 'react-router-dom'

function Page() {
    const {restName, restId} = useParams()
  return (
    <div>
        <h1>{restName ? restName : 'Home'}</h1>
        <h1>{restId ? restId : '0'}</h1>

        <br />
        <br />
        <br />
        <br />
        <br />
        <a href="/">back</a>
    </div>
  )
}

export default Page
