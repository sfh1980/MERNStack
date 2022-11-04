import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const SearchResultsPlanet = (props) => {
  const [searchResultsPlanet, setSearchResultsPlanet] = useState("")
  const {id} = useParams()

  useEffect(() => {
    axios
        .get(`https://swapi.dev/api/planets/${id}`)
        .then(response => setSearchResultsPlanet(response.data))
        .catch(error => console.log(error))
  }, [id])


  return (
    <div>
      <h1>{searchResultsPlanet.name}</h1>
      <p>Climate: {searchResultsPlanet.climate}</p>
      <p>Terrain: {searchResultsPlanet.terrain}</p>
      <p>Surface Water: {searchResultsPlanet.surface_water}</p>
      <p>Population: {searchResultsPlanet.population}</p>
    </div>
  )
}

export default SearchResultsPlanet



