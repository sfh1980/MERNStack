import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const SearchFor = (props) => {
    const [searchFor, setSearchFor] = useState("people")
    const [id, setId] = useState(1)
        const navigate = useNavigate()


    const SubmitHandler = (e) => {
        e.preventDefault();        
        navigate(`/${searchFor}/${id}`)
        }
    


    return (
        <div>
            <div>
                <form onSubmit={SubmitHandler}>
                    <label style={{marginRight:"5px"}}>Search for:</label>
                    <select style={{marginRight:"5px"}} onChange={e => setSearchFor(e.target.value)}>
                        <option value="people">People</option>
                        <option value="planets">Planets</option>
                    </select>
                    <label style={{marginRight:"5px"}}>Id: </label>
                    <input type="number"onChange={e => setId(e.target.value)} />
                    <button style={{backgroundColor:"blue", borderRadius:"5px", color:"white", marginTop:"10px"}}>Search</button>
                </form >

            </div>
        </div>
    )
}

export default SearchFor