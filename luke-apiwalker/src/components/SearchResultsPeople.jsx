import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import axios from 'axios'

const SearchResultsPeople = (props) => {
    const [searchResultsPeople, setSearchResultsPeople] = useState("")
    const { id } = useParams()

    useEffect(() => {
        axios
            .get(`https://swapi.dev/api/people/${id}`)
            .then(response => setSearchResultsPeople(response.data))
            .catch(error => console.log(error))
    }, [id])



    return (
        <div>
            <h1>{searchResultsPeople.name}</h1>
            <p>Height: {searchResultsPeople.height} cm</p>
            <p>Mass: {searchResultsPeople.mass} kg</p>
            <p>Hair Color: {searchResultsPeople.hair_color}</p>
            <p>Eye Color: {searchResultsPeople.eye_color}</p>
        </div>
            
    )
}

export default SearchResultsPeople;



