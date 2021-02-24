'use strict'

/**
 *  Page Not Found LandingPage page.
 *
 *  @Author - Adam InTae Gerard - https://www.linkedin.com/in/adamintaegerard/
 */

import React from 'react'
import './PageNotFoundPage.css'
import YouTubeComponent from '../YouTubeComponent'
import UnsplashSection from "../UnsplashSection";

export default () =>
    <main className="notFoundPage">
        <UnsplashSection photo={'1591858219137-84737f6e8a67'} ixid={'eyJhcHBfaWQiOjEyMDd9'}/>
        <div className="content">
            <div className="text">
                404. Whoops! You landed on the wrong page (But hey... check out the sweet video below)!
            </div>
        </div>
        <YouTubeComponent className="more" url={"https://www.youtube.com/embed/oHHSSJDJ4oo"}/>
    </main>