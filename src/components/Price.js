import React from 'react';
import { Link } from 'react-router-dom'


const Price = ({ pricing }) => {

    const pricingList = pricing.length ? (
        pricing.map(price => {
            return (
                <div className="card container col s12 m4" key={price.id}>
                    <div className="card z-depth-3">
                        <div className=" button center">
                            <div className="card-action center">
                                <h1 className=" card-title center">{price.title}</h1>
                            </div>
                        </div>
                        <h1 className=" center">{price.planPrice}</h1>
                        <div className="card-content center">
                            <ul className="collection ">
                                <li className="collection-item">{price.description} </li>
                                <li className="collection-item">{price.description2}</li>
                                <li className="collection-item">{price.description3}</li>
                            </ul>
                        </div>
                    </div>
                    <div className="card-action center">
                        <button className="btn waves-effect waves-light " type="submit" name="action"><Link to="/Order" className="buy-btn ">BUY</Link></button>
                    </div>
                </div>
            )
        })
    ) : (
            <div>No Plan at the moment</div>
        );



    return (
        <div className="row">
            <h2 className="center">Pricing Plan </h2>
            {pricingList}
        </div>
    );
}

export default Price;


