import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useNavigate, useParams } from "react-router-dom"






const Main = (props) => {

    const [products, setProducts] = useState([])
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState("")
    const {id} = useParams()

    const navigate = useNavigate()

    useEffect(() => {
        // console.log(id)
        axios.get("http://localhost:8000/api/product")
            .then(res => {
                setProducts(res.data.products)
                console.log(products)
            })
            .catch(err => {

            })
    }, [id])

    const submitHandler = (e) => {
        e.preventDefault()
        const newProduct = { title, price, description }
        axios.post(`http://localhost:8000/api/product`, newProduct)
            .then(res => setProducts ([...products, newProduct]))
            .catch(err => console.log(err))
    }

    const deleteHandler = (productId) => {
        axios.delete(`http://localhost:8000/api/product/${productId}`)
        .then(res => {
           setProducts(products.filter(products => products._id !== productId))
            console.log(products)
        } )
        
        .catch(err => console.log(err))
    }

    const goToEditOne = (productMongoID) => {
        console.log(productMongoID)
        navigate("/product/" + productMongoID + "/edit")
    }


    return (
        <div>
            <h1>Product Manager</h1>
            <div>
                {/* {JSON.stringify(title)}
                {JSON.stringify(price)}
                {JSON.stringify(description)} */}

                <form onSubmit={submitHandler} >
                    <div>
                        <label>Title</label>
                        <input type="text" name="title" value={title}
                            onChange={e => setTitle(e.target.value)} />
                    </div>
                    <div>
                        <label>Price</label>
                        <input type="number" name="price" value={price}
                            onChange={e => setPrice(e.target.value)} />
                    </div>
                    <div>
                        <label>Description</label>
                        <input type="text" name="description" value={description}
                            onChange={e => setDescription(e.target.value)} />
                    </div>
                    <button type="submit">Submit</button>
                </form>
                <div>
                    <h1>All Products</h1>
                    <ul style={{listStyleType:'none'}}>
                        {products.map((product, i) => (
                            <li key={i}>
                                <Link to={`/product/${product._id}`}>{product.title}</Link>
                                <button onClick={(e) => deleteHandler(product._id)}>Delete</button>
                                <button onClick={() => goToEditOne(product._id)} >Edit</button>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>

        </div>
    )
}

export default Main