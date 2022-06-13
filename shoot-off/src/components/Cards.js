import React, { useContext, useState } from 'react'
import { Card } from './Card'
import fakeProduct from "./fakeProducts.json"
import "../styles/cards.css"
import { ReqContext } from '../context/RequestState'
import { useEffect, useState } from 'react'
import axios from 'axios'

export const Cards = () => {

    const [products, setProduct] = useState([])

    useEffect(() => {
        axios.get(`/api/product`)
            .then(res => res.data)
            .then(products => {
                setProduct(products)
            })
    }, [])


    return (
        <div className='container d-flex justify-content-center'>
            <div className='row'>
                {
                    products.map((product, i) => (
                        <div className='col-md-4' key={i}>
                            <Card props={product} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

