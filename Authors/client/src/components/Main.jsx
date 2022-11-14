import React from 'react'
import AuthorsTable from './AuthorsTable'
import NavBar from './NavBar'

const Main = () => {
  return (
    <div>
        <NavBar
        title="Favorites Authors"
        linkName="Add an author"
        linkAction="/new"
        subtitle="We have quotes by:"
        />
        <AuthorsTable />
    </div>
  )
}

export default Main