import React from 'react';
import {Link} from "react-router-dom";
import NumberFormat from 'react-number-format';

export default function CartTotals({value}) {
    const{cartSubtotal, cartTax, cartTotal, clearCart} = value;

    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                        <Link to="/">
                            <button className="btn-outline-danger text-uppercase mb-3 px-5"
                                    type="button"
                                    onClick={() => clearCart()}>
                                clear cart
                            </button>
                        </Link>
                        <h5>
                            <span className="text-title">
                                subtotal:
                            </span>
                            <NumberFormat
                                value={cartSubtotal}
                                displayType={'text'}
                                thousandSeparator={true}
                                prefix={'$'}
                                decimalScale ={2}
                                fixedDecimalScale ={true}
                                renderText={cartSubtotal => <strong>{cartSubtotal}</strong>} />

                        </h5>
                        <h5>
                            <span className="text-title">
                                tax:
                            </span>
                            <NumberFormat
                            value={cartTax}
                            displayType={'text'}
                            thousandSeparator={true}
                            prefix={'$'}
                            decimalScale ={2}
                            fixedDecimalScale ={true}
                            renderText={cartTax => <strong>{cartTax}</strong>} />
                        </h5>
                        <h5>
                            <span className="text-title">
                                Total:
                            </span>
                            <NumberFormat
                                value={cartTotal}
                                displayType={'text'}
                                thousandSeparator={true}
                                prefix={'$'}
                                decimalScale ={2}
                                fixedDecimalScale ={true}
                                renderText={cartTotal => <strong>{cartTotal}</strong>} />
                        </h5>
                    </div>
                </div>
            </div>
        </React.Fragment>
        );
    }

