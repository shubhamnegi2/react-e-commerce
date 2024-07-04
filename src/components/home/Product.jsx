import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

import crossImg from '../../assets/images/cross.svg'

export default function Product() {
    const [productData, setProductDate] = useState([])
    useEffect(() => {
        fetch('/src/api/Product.json')
            .then((res) => res.json())
            .then(data => setProductDate(data))
    }, [])
    console.log(productData);
    return (
        <>
            <div className="product-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
                            <h2 className="mb-4 section-title">Crafted with excellent material.</h2>
                            <p className="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. </p>
                            <p><NavLink to="/shop" className="btn">Explore</NavLink></p>
                        </div>


                        {productData.slice(0, 3).map(data => (
                            <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                                <NavLink key={data.id} className="product-item" to={`/productDetails/${data.id}`}>
                                    <img src={data.image} className="img-fluid product-thumbnail" />
                                    <h3 className="product-title">{data.title}</h3>
                                    <strong className="product-price">$ {data.price}</strong>

                                    <span className="icon-cross">
                                        <img src={crossImg} className="img-fluid" />
                                    </span>
                                </NavLink>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </>
    )
}
