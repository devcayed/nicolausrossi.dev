import React from 'react'
import { Helmet } from 'react-helmet-async'

import { TypedTitle } from '../components/text/titles/TypedTitle'
import { Paragraph } from '../components/text/paragraph/Paragraph'
import { HyperlinkList } from '../components/layout/HyperlinkList'

const Main = () => {
    return (
        <div className="w-full md:px-12">
            <Helmet>
                <title>NR | Home</title>
            </Helmet>
            <div className="lg:w-256">
                <TypedTitle strings={['oh look, a wild nico appeared!', 'i build cool stuff on the web.']} />
            </div>
            <Paragraph className="mt-5">
                hey, i am nico,
            </Paragraph>
            <div className="flex justify-center">
                <div className="w-96 text-left">
                    <Paragraph className="mt-3">
                        a bachelors student for computer science who enjoys building fun and awesome stuff on the internet, learning modern technologies and {' '}
                        <a
                            href="https://www.youtube.com/watch?v=pMHTQ8r9pQU"
                            target="_blank"
                            rel="noreferrer"
                            className="easter-egg"
                        >
                            listening to really loud drum and bass.
                        </a>
                    </Paragraph>
                </div>
            </div>
            <Paragraph className="mt-8">
                check out my socials!
            </Paragraph>
            <HyperlinkList className="mt-5" />
        </div>
    )
}

export { Main }
