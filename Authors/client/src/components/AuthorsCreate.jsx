import React from 'react'
import NavBar from './NavBar'
import AuthorsForm from './AuthorsForm'

const AuthorsCreate = () => {
  return (
    <div>
        <NavBar
        title="Favorite Authors"
        linkName="Home"
        linkAction="/"
        subtitle="Add a new Author:"
        />
        <AuthorsForm />
    </div>
  )
}

export default AuthorsCreate