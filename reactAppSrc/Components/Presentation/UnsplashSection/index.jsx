'use strict'

/**
 *  Unsplash section
 *
 *  @Author - Adam InTae Gerard - https://www.linkedin.com/in/adamintaegerard/
 */

import React from 'react'
import './UnsplashSection.css'

const STYLE = (photo, ixid) => {
    return {
        'backgroundImage': `url('https://images.unsplash.com/photo-${photo}?ixlib=rb-1.2.1&ixid=${ixid}&auto=format&fit=crop&w=1000&q=80')`
    }
}

export default ({photo, ixid}) =>
    <div className="unsplash" style={STYLE(photo, ixid)}>

    </div>