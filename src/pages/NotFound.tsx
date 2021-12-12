import React from 'react'
import { Helmet } from 'react-helmet-async'

import { StaticTitle } from '../components/titles/StaticTitle'
import { TitleSubheading } from '../components/titles/TitleSubheading'

const NotFound = () => {
    return (
        <div className="w-full md:px-12">
            <Helmet>
                <title>404 - Whoops</title>
            </Helmet>
            <StaticTitle>404</StaticTitle>
            <TitleSubheading>whoops...</TitleSubheading>
            <TitleSubheading>looks like you've reached a dead end!</TitleSubheading>

            <br/>

            <div className="text-3xl">
                :((
            </div>
        </div>
    )
}

export { NotFound }
