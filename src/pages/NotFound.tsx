import React from 'react'
import { Helmet } from 'react-helmet-async'

import { StaticTitle } from '../components/text/titles/StaticTitle'
import { TitleSubheading } from '../components/text/titles/TitleSubheading'

const NotFound = () => {
    return (
        <div className="w-full md:px-12">
            <Helmet>
                <title>NR | 404</title>
            </Helmet>

            <StaticTitle>404</StaticTitle>

            <TitleSubheading className="mt-5">
                whoops...
            </TitleSubheading>
            <TitleSubheading className="mt-2">
                looks like you've reached a dead end!
            </TitleSubheading>

            <div className="text-3xl mt-5">
                :((
            </div>
        </div>
    )
}

export { NotFound }
