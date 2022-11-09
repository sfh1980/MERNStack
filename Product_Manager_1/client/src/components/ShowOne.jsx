import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {useNavigate, useParams} from 'react-router-dom'

const ShowOne = (props) => {

    const [product, setProduct] = useState([])
    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(() =>{
        axios.get(`http://localhost:8000/api/product/${id}`)        
        .then(res => setProduct(res.data.product))
        .catch(err => console.log(err))
    }, [id])

    const deleteHandler = () => {
        axios.delete(`http://localhost:8000/api/product/${id}`)
        .then(response => navigate(`/product`))
        .catch(err => console.log(err))
    }

  return (
    <div>
            <h1>Product Details</h1>
            {
                product ? (
                <div>
                    <h3>Title: {product.title}</h3>
                    <h3>Price: {product.price}</h3>
                    <h3>Description: {product.description}</h3>
                    <button onClick={deleteHandler}>Delete</button>
                </div>
                ):(
                    <p>Loading</p>
                )
            }
        </div>
  )
}

export default ShowOne