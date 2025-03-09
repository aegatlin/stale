import React from 'react'
import { Todos } from './todos/Todos'

export const App: React.FC<{}> = () => {
  return (
    <div>
      <h1>ENFRAME_APP_NAME</h1>
      <p>ENFRAME_APP_DESCRIPTION</p>
      <Todos />
    </div>
  )
}
