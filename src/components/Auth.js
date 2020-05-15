import React, { Component } from 'react'

export default class Auth extends Component {
    render() {
        return (
            <div class="row">
                <div class="col s12 m6">
                    <div class="card white darken-4 ">
                        <div class="card-content white-text">
                            <div className="row">
                                <div class="input-field col s12">
                                    <input id="email" type="email" class="validate"></input>
                                    <label for="email">Email</label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="input-field col s12">
                                    <input id="password" type="password" class="validate"></input>
                                    <label for="password">Password</label>
                                </div>
                                <div className="col s6">
                                    <p>
                                        <label>
                                            <input type="checkbox" />
                                            <span>Remember me</span>
                                        </label>
                                    </p>
                                </div>
                            </div>
                            <div class=" row center">
                                <div className="col 6">
                                    <button className="btn btn-block " >Login</button>
                                </div>
                                <div className="col s6">
                                    <button className="btn btn-block" >Signup</button>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        )
    }
}


