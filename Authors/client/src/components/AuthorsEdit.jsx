import React from 'react'
import NavBar from './NavBar'
import AuthorsForm from './AuthorsForm'

const AuthorsEdit = () => {
  return (
    <div>
        <NavBar
        title="Favorite Authors"
        linkName="Home"
        linkAction="/"
        subtitle="Edit this Author:"
        />
        <AuthorsForm />

    </div>
  )
}

export default AuthorsEdit