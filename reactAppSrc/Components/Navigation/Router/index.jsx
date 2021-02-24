'use strict'

/**
 *  Router.
 *
 *  @Author - Adam InTae Gerard - https://www.linkedin.com/in/adamintaegerard/
 */

import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import CustomHeader from '../../Presentation/CustomHeader'
import './Router.css'
import {BASE_PATH, HOME_PATH} from '../../../Constants'

import LandingPage from '../../Presentation/LandingPage'
import PageNotFoundPage from '../../Presentation/PageNotFoundPage'
import CustomFooter from "../../Presentation/CustomFooter";

export default () =>
    <BrowserRouter>
        <div className="innerRouterWrapper">
            <CustomHeader/>
            <Switch>
                <Route exact path={BASE_PATH} component={LandingPage}/>
                <Route exact path={HOME_PATH} component={LandingPage}/>
                <Route component={PageNotFoundPage}/>
            </Switch>
            <CustomFooter/>
        </div>
    </BrowserRouter>