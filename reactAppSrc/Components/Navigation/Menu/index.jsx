'use strict'

/**
 *  Navigation Menu.
 *
 *  @Author - Adam InTae Gerard - https://www.linkedin.com/in/adamintaegerard/
 */

import React from 'react'
import {Link} from 'react-router-dom'
import {BASE_PATH, HOME_PATH} from '../../../Constants'

let w = window.location.pathname

export class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.home = React.createRef();
    }

    render() {
        return (
            <nav>
                <ul>
                    <li className="home">
                        <Link onClick={() => {
                            w = BASE_PATH;
                            this.home.current.className = 'active';
                        }}
                              ref={this.home}
                              className={(w === BASE_PATH || w === HOME_PATH) ? 'active' : 'inactive'}
                              to={BASE_PATH}>Home</Link>
                    </li>
                </ul>
            </nav>)
    }
}