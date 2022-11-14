import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AuthorsTable = () => {
    const navigate = useNavigate()

    const [allAuthors, setAllAuthors] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
            .then(res => {
                console.log(res.data.authors)
                setAllAuthors(res.data.authors)
            })
            .catch(err => console.log(err))
    }, [])

    const removeAuthor = (deleteID) => {    
        if(window.confirm("Confirm you wish to delete")) {
        axios.delete("http://127.0.0.1:8000/api/author/"+ deleteID)
            .then(res => {
                console.log("Successfully removed", res.data.authors)
                setAllAuthors(allAuthors.filter((item) => item._id !== deleteID))
            })
            .catch(err => console.log(err))
        }
    }

    const goToEdit = (authorMongoID) => {
        navigate("/"+authorMongoID+"/edit")
    }

  

    return (
        <div style={{display:'flex', justifyContent:'center'}}>

            <table style={{borderCollapse: 'collapse', border:'1px solid black',}}>
                <thead style={{backgroundColor:'#54585d',color:'#ffffff', fontWeight:'bold',fontSize:'13px', border:'1px solid black'}}>
                    <tr style={{border:'1px solid black', tr:'nth-child'}}>
                        <th style={{border:'1px solid black'}}>Author</th>
                        <th style={{border:'1px solid black'}}>Actions Available</th>
                    </tr>
                </thead>
                <tbody style={{border:'1px solid black'}}>
                    {
                        allAuthors.map((item, idx) => {
                            return (
                                <tr style={{border:'1px solid black'}} key={item._id}>
                                    <td style={{padding:'15px', border:'1px solid black'}}> {item.name} </td>
                                    <td style={{padding:'15px', border:'1px solid black'}}>
                                 <button style={{border:'0',margin:'15px', borderRadius:'5px',background:'#007a5a',color:'white'}} onClick={() => goToEdit(item._id)}>edit</button>
                                 <button style={{border:'0',margin:'15px', borderRadius:'5px',background:'#007a5a',color:'white'}} onClick={() => removeAuthor(item._id)}>delete</button>
                                 </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default AuthorsTable