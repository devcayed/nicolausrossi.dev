import React from 'react'
import { Helmet } from 'react-helmet-async'

import { TypedTitle } from '../components/titles/TypedTitle'
import { GitHubLink } from '../components/hyperlinks/GitHubLink'


const Main = () => {
    return (
        <div className="w-full md:px-12">
            <Helmet>
                <title>Nico's awesome website</title>
            </Helmet>
            <TypedTitle strings={['oh look, a wild nico appeared!', 'i like building stuff on the internet.']} />
            <GitHubLink link="https://github.com/devcayed/" />
        </div>
    )
}

export { Main }
