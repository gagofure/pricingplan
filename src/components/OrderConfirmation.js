import React from 'react'
import { Link } from 'react-router-dom'


export default function OrderConfirmation() {
    return (
        <div class="col s12 m7">
            <div class="card horizontal">
                <div class="card-stacked">
                    <div class="card-content">
                        <h1>Your order is being processed.</h1>
                    </div>
                    <div class="card-action text-blue ">
                        <Link to="/" className="btn" > Go to pricing plans</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
