import React, {Component} from 'react';
import {ProductConsumer} from '../Context'
import {Link} from "react-router-dom";
import {ButtonContainer} from "./Button";

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) =>{
                   const {id,company,img,price, title, info, inCart}= value.detailProduct
                    return (
                        <div className="container py-5">
                            {/*TITLE*/}
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-blue text-slanted my-5">
                                    <h1>{title}</h1>
                                </div>
                            </div>
                            {/*TITLE*/}
                            {/*Product info*/}
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <img src={img} className="img-fluid" alt="product"/>
                                </div>
                                {/*Product text*/}

                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h2> model: {title}</h2>
                                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                        made by: <span className="text-uppercase">
                                        {company}</span>
                                    </h4>
                                    <h4 className="text-blue"><strong><span>${price}</span></strong></h4>
                                    <p className="text-capitalize font-weight-bold mt-3 mb-0"> some info about the product</p>
                                    <p className="text-muted lead">{info}</p>
                                    {/*Buttons*/}

                                    <div >
                                        <Link to="/">
                                            <ButtonContainer> Back to product</ButtonContainer>
                                        </Link>
                                        <ButtonContainer
                                            cart
                                        disabled={inCart?true:false}
                                        onClick={()=>{
                                            value.addToCart(id);
                                        }}
                                        >
                                            {inCart ? 'inCart':'add to Cart'}
                                        </ButtonContainer>
                                    </div>
                                    </div>

                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        );
    }
}

