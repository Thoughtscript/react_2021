'use strict'

/**
 *  Grid-only LandingPage page.
 *
 *  @Author - Adam InTae Gerard - https://www.linkedin.com/in/adamintaegerard/
 */

import React from 'react'
import UnsplashSection from '../UnsplashSection'
import './LandingPage.css'
import YouTubeComponent from "../YouTubeComponent";

export default () =>
    <main className="landingPage">
        <UnsplashSection photo={'1591858219137-84737f6e8a67'} ixid={'eyJhcHBfaWQiOjEyMDd9'}/>
        <div className="content">
            <div className="text">
                Lorem Ipsum
            </div>
        </div>
        <YouTubeComponent className="more" url={"https://www.youtube.com/embed/oHHSSJDJ4oo"}/>
    </main>