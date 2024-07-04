
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default function Details({ productData, pName }) {
    if (!productData) {
        return <><h1 className='text-center font-weight-bold'>Please wait...</h1></>;
    }
    const [img, setImg] = useState('')
    const [quantity, setQuantity] = useState(1)

    useEffect(() => {
        pName(productData.map(data => ({title: data.title, category: data.category})))
    }, [productData])



    function Rating(rating) {
        const fullStars = Math.floor(rating);
        const halfStar = Math.ceil(rating) > fullStars;

        const stars = [];

        // Add full stars
        for (let i = 0; i < fullStars; i++) {
            stars.push(<i key={`full-${i}`} className="fa fa-star mx-1"></i>);
        }

        // Add half star if needed
        if (halfStar) {
            stars.push(<i key="half" className="fa fa-star-half-o mx-1"></i>);
        }

        return (
            <div className="text-warning mb-1 me-2">
                {stars}
                <span className="ms-1">{rating}</span>
            </div>
        );
    }

    const showLargeImg = (e) => {
        setImg(e.target.src);
    }

    const increase = () => {
        quantity >= 999 ? setQuantity(999) : setQuantity(prev => (parseInt(prev) + 1))
    }
    const decrease = () => {
        quantity <= 0 ? setQuantity(1) : setQuantity(prev => (parseInt(prev) - 1))
    }
    useEffect(() => {
        if (isNaN(quantity)) {
            setQuantity(1);
        }

        console.log(quantity);
    }, [quantity])
    return (
        <>
            {productData.map(data => (
                <section key={data.id} className="py-5 bg-white" style={{ fontFamily: '"Roboto", sans-serif' }}>
                    <div className="container">
                        <div className="row gx-5">
                            <aside className="col-lg-6">
                                <div className="border rounded-4 mb-3 d-flex justify-content-center">
                                    <NavLink data-fslightbox="mygalley" className="rounded-4" target="_blank" data-type="image" href="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big.webp">
                                        <img style={{ maxWidth: '100%', maxHeight: '100vh', margin: 'auto' }} className="rounded-4 fit" src={img == '' ? data.image : img} />
                                    </NavLink >
                                </div>
                                <div className="d-flex justify-content-center mb-3">

                                    <span className=" item-thumb border mx-1 rounded-2 cursor-pointer" >
                                        <img onMouseEnter={(e) => showLargeImg(e)} onClick={(e) => showLargeImg(e)} width="60" height="60" className="rounded-2" src="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big1.webp" />
                                    </span >
                                    <span className="item-thumb border mx-1 rounded-2 cursor-pointer">
                                        <img onMouseEnter={(e) => showLargeImg(e)} onClick={(e) => showLargeImg(e)} width="60" height="60" className="rounded-2" src="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big2.webp" />
                                    </span >
                                    <span className="item-thumb border mx-1 rounded-2 cursor-pointer">
                                        <img onMouseEnter={(e) => showLargeImg(e)} onClick={(e) => showLargeImg(e)} width="60" height="60" className="rounded-2" src="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big3.webp" />
                                    </span >
                                    <span className="item-thumb border mx-1 rounded-2 cursor-pointer">
                                        <img onMouseEnter={(e) => showLargeImg(e)} onClick={(e) => showLargeImg(e)} width="60" height="60" className="rounded-2" src="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big4.webp" />
                                    </span >
                                    <span className="item-thumb border mx-1 rounded-2 cursor-pointer">
                                        <img onMouseEnter={(e) => showLargeImg(e)} onClick={(e) => showLargeImg(e)} width="60" height="60" className="rounded-2" src="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big.webp" />
                                    </span >
                                </div>

                            </aside>
                            <main className="col-lg-6">
                                <div className="ps-lg-3">
                                    <h4 className="title text-dark">
                                        {data.title}
                                    </h4>
                                    <div className="d-flex flex-row my-3">
                                        {Rating(data.rating.rate)}
                                        <span className="text-muted"><i className="fa fa-shopping-basket fa-sm mx-1"></i>154 orders</span>
                                        <span className="text-success ms-2">In stock</span>
                                    </div>

                                    <div className="mb-3">
                                        <span className="h5">${data.price}</span>
                                        <span className="text-muted">/per box</span>
                                    </div>

                                    <p>
                                        {data.description}
                                    </p>

                                    <div className="row">
                                        <dt className="col-3">Type:</dt>
                                        <dd className="col-9">{data.type}</dd>

                                        <dt className="col-3">Color</dt>
                                        <dd className="col-9">{data.color}</dd>

                                        <dt className="col-3">Material</dt>
                                        <dd className="col-9">{data.material}</dd>

                                        <dt className="col-3">Brand</dt>
                                        <dd className="col-9">{data.brand}</dd>
                                    </div>

                                    <hr />

                                    <div className="row mb-4">
                                        <div className="col-md-4 col-6">
                                            <label className="mb-2">Size</label>
                                            <select className="form-select border border-secondary" style={{ height: '35px' }}>
                                                <option>Small</option>
                                                <option>Medium</option>
                                                <option>Large</option>
                                            </select>
                                        </div>
                                        <div className="col-md-4 col-6 mb-3">
                                            <label className="mb-2 d-block">Quantity</label>
                                            <div className="input-group mb-3" style={{ width: '170px' }}>
                                                <button onClick={decrease} className="btn btn-white border border-secondary px-3" type="button" data-mdb-ripple-color="dark">
                                                    <i className="fa fa-minus"></i>
                                                </button>
                                                <input type="text" onChange={(e) => setQuantity(e.target.value)} maxLength={4} value={quantity} className="form-control text-center border border-secondary" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                                                <button onClick={increase} className="btn btn-white border border-secondary px-3" type="button" data-mdb-ripple-color="dark">
                                                    <i className="fa fa-plus"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <NavLink href="#" className="btn btn-warning shadow-0"> Buy now </NavLink >
                                    <NavLink href="#" className="btn btn-primary shadow-0"> <i className="me-1 fa fa-shopping-basket"></i> Add to cart </NavLink >
                                    <NavLink href="#" className="btn btn-light border border-secondary py-2 icon-hover px-3"> <i className="me-1 fa fa-heart fa-lg"></i> Save </NavLink >
                                </div>
                            </main>
                        </div>
                    </div>
                </section>
            ))}
        </>
    );
}
