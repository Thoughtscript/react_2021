'use strict'

/**
 *  App container.
 *
 *  @Author - Adam InTae Gerard - https://www.linkedin.com/in/adamintaegerard/
 */

import React, { useState } from 'react';

export default () => {
    const [stateVar, setStateVar] = useState(0)
    return (
        <div>
            <button onClick={() => setStateVar(count++)}>State Counter</button>
        </div>
    )
}