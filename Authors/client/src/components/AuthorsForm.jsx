import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'


const AuthorsForm = () => {
    const {id} = useParams()
    const Navigate = useNavigate()
    const [formInfo, setFormInfo] = useState({
        name: ""
    })

    const [formErrs, setFormErrs] = useState([])

    const inputHandler = (e) => {
        let value = e.target.value
        let name = e.target.name
        setFormInfo({
            ...formInfo,
            [name]: value
    })
    }

    const formHandler = (e) => {
        e.preventDefault()
        console.log(formInfo)
        if(id === undefined){
            axios.post('http://localhost:8000/api/author', {
                name: formInfo.name
            })
                .then(res => {
                    Navigate("/")
                })
                .catch(err => {
                    const errs = []
                    let data = err.response.data.error.errors    
                    for (const key in data) {
                        let msg = data[key].message
                        errs.push(msg)
                    }
                    setFormErrs(errs)
                })
             } else {
                axios.put("http://localhost:8000/api/author/" +id,formInfo)
                .then(res => {
                    console.log(res.data)
                    Navigate("/")
                })
                .catch(err => {
                    const errs = []
                    let data = err.response.data.error.errors    
                    for (const key in data) {
                        let msg = data[key].message
                        errs.push(msg)
                    }
                    setFormErrs(errs)
                })
        }
    }

    useEffect(() => {
        console.log(id)
        if(id !== undefined){
            axios.get("http://localhost:8000/api/author/"+id)
            .then(res => {
                setFormInfo(res.data.author)
                console.log(res.data.author)
            })
            .catch(err => {
                const errs = []
                let data = err.response.data.error.errors

                for (const key in data) {
                    let msg = data[key].message
                    errs.push(msg)
                }
                setFormErrs(errs)
            })
        }else{
            setFormInfo({
                name:""
        })
        }
        
    },[])



    return (
        <div style={{paddingLeft:'300px', paddingRight:'300px'}}>
            {
                formErrs.map((item, idx) => {
                    return (
                        <p key={idx}>{item}</p>
                    )
                })
            }
            <form onSubmit={formHandler} style={{border:'1px solid black'}}>
                <div>
                    <label>Name: </label>
                    <input type="text" name="name" id="name" onChange={inputHandler} value={formInfo.name} />
                </div>
                <Link to="/">
                    <button style={{margin:'15px',border:'0',borderRadius:'5px', backgroundColor:'#4299e1', color:'white'}}>Cancel</button>
                </Link>
                <button style={{margin:'15px',border:'0',borderRadius:'5px', backgroundColor:'#4299e1', color:'white'}}>Submit</button>
            </form>
        </div>
    )
}

export default AuthorsForm