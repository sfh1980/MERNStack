import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = (props) => {
    const {title="Title Here", linkAction="/", linkName="Link Name Here", subtitle="Subtext Here"} = props
  return (
    <div>
        <h1>{title}</h1>
        <Link to={linkAction} style={{color:'blue'}}>{linkName}</Link>
        <p style={{color:'blue'}}>{subtitle}</p>
    </div>
  )
}

export default NavBar