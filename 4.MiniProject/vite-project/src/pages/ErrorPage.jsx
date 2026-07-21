import React from 'react'
import { NavLink } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div>404 Not Found
        <NavLink to="/createPost"> Go to createPost</NavLink>

        
    </div>
  )
}

export default ErrorPage