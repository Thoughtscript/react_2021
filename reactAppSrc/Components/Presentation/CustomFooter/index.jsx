'use strict'

/**
 *  CustomFooter.
 *
 *  @Author - Adam InTae Gerard - https://www.linkedin.com/in/adamintaegerard/
 */

import React from 'react'
import CustomLink from '../CustomLink'
import './CustomFooter.css'

export default () =>
    <footer>
        <ul>
            <li><CustomLink url={'https://www.linkedin.com/in/adamintaegerard/'} label={'LinkedIn'}/></li>
            <li><CustomLink url={'https://thoughtscript.io/landing.html'} label={'Thoughtscript.io'}/></li>
        </ul>
    </footer>