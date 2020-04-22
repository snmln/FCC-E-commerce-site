import React, {Component} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ProductConsumer} from "../Context";
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';

export default class Product extends Component {
    render() {
        const {id, title, img, price, inCart, company} = this.props.product;
        //var NumberFormat = require('react-number-format');

        return (
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                    <ProductConsumer>
                        {(value) => (
                            <div
                                className="img-container p-5"
                                onClick={()=>{
                                    value.handleDetail(id);
                                }}>
                            <Link to="/details">
                                <img src={img} alt="product" className="card-img-top"/>
                            </Link>
                            <button
                                className="cart-btn"
                                disabled={inCart ? true : false}
                                onClick={()=> {
                                value.addToCart(id);
                                    value.openModal(id)

                                }
                                } >
                                {inCart ? (<p className="text-capitalize mb-0" disabled>In Cart</p>):(<i className="fa fa-cart-plus" />)}
                            </button>
                        </div>)}

                    </ProductConsumer>
                    {/*card footer*/}
                    <div className="card-footer d-flex justify-content-between">
                        <p className="align-self-center mb-0">
                            {title}
                            <br/><strong className="company-name">{company}</strong>
                            <hr className="py-2 w-auto"></hr>
                            <h5 className="text-blue font-italic mb-0">
                                {/*<span>${price}</span>*/}

                                <NumberFormat
                                    value={price}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    prefix={'$'}
                                    decimalScale ={2}
                                    fixedDecimalScale ={true}
                                    renderText={price => <span>{price}</span>} />

                            </h5>
                        </p>
                    </div>
                </div>
            </ProductWrapper>
        );
    }
}

Product.propTypes = {
    product:PropTypes.shape({
        id:PropTypes.number,
        image:PropTypes.string,
        title:PropTypes.string,
        price:PropTypes.number,
        inCart:PropTypes.bool
    }).isRequired
}

const ProductWrapper = styled.div`
.card{
    border-color:transparent;
    transition: all .2s ease-in-out;
    
}

.card-footer{
    background:transparent;
    border-top:transparent;
    transition: all .2s ease-in-out;

}
&:hover{
.card{
    border:0.04 rem rgba(0,0,0,0.2);
    box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2);

}

.card-footer{
    background:rgba(247,247,247);
    }
}
.img-container{
    position:relative;
    overflow: hidden;
}
.card-img-top{
      transition: all .2s ease-in-out;
}

.img-container:hover .card-img-top{
    transform:scale(1.2);
}

.cart-btn{
    position:absolute;
    bottom: 0;
    right:0;
    padding: 0.2rem 0.4rem;
    background:var(--mainBlue);
    border:none;
    color:var(--mainWhite);
    font-size:1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
              transition: all .2s ease-in-out;

}

.img-container: hover .cart-btn{
    transform: translate(0,0);
          transition: all .2s ease-in-out;
}

.cart-btn:hover{
    color:var(--mainBlue);
    cursor:pointer;
}

`