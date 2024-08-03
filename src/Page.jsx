import React from 'react'
import { useParams } from 'react-router-dom'

function Page() {
    const {restName, restId} = useParams()
  return (
    <div>
        <h1>{restName}</h1>
        <h1>{restId ? restId : '0'}</h1>
    </div>
  )
}

export default Page
