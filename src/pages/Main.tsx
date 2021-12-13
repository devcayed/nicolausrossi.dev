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
            <div className="lg:w-256 md:w-96">
                <TypedTitle strings={['oh look, a wild nico appeared!', 'i (try to) build stuff on the internet']} />
            </div>
            <div className="">
                <Paragraph className="mt-5">
                    hey, i am nico
                </Paragraph>
                <Paragraph className="mt-3">
                    a computer science student who likes building
                </Paragraph>
                <Paragraph>
                    cool and fun stuff on the internet, learning new
                </Paragraph>
                <Paragraph>
                    technologies and {' '}
                    <a
                        href="https://www.youtube.com/watch?v=pMHTQ8r9pQU"
                        target="_blank"
                        rel="noreferrer"
                        className="easter-egg"
                    >
                        listening to really loud drum and bass
                    </a>
                </Paragraph>
            </div>
            <Paragraph className="mt-8">
                check out my socials!
            </Paragraph>
            <HyperlinkList className="mt-5" />
        </div>
    )
}

export { Main }
