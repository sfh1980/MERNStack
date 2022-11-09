import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

const EditOne = (props) => {

    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState("")
    const { id } = useParams()
    const navigate = useNavigate()


    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then(res => {                
                console.log(res.data.product.title)
                setTitle(res.data.product.title)
                setPrice(res.data.product.price)
                setDescription(res.data.product.description)
            })
            .catch(err => console.log(err))
    }, [id])

    const submitHandler = (e) => {
        e.preventDefault()
        const editProduct = { title, price, description }
        axios.put(`http://localhost:8000/api/product/${id}`, editProduct)
            .then(res => navigate(`/product`))
            .catch(err => {
                const errArr = []
                const errResData = err.res.data.errors
                console.log(errResData)
                for (const key in errResData) {
                    errArr.push(errResData[key]["message"])
                }
                
            })
    }

    const deleteHandler = () => {
        axios.delete(`http://localhost:8000/api/product/${id}`)
            .then(response => navigate(`/product`))
            .catch(err => console.log(err))
    }




    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Title</label>
                    <input onChange={e => setTitle(e.target.value)} value={title} />
                </div>
                <div>
                    <label>Price</label>
                    <input onChange={e => setPrice(e.target.value)} value={price}/>
                </div>
                <div>
                    <label>Description</label>
                    <input onChange={e => setDescription(e.target.value)} value={description}/>
                </div>
                <button type="submit">Update Product</button>
            </form>
            
            <button onClick={deleteHandler}>Delete</button>
            
        </div>
    )
}

export default EditOne