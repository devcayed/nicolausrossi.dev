import React from 'react'

const TitleSubheading = (props: any) => {
    return <h1 className={`text-2xl font-extralight ${props.className}`}>{props.children}</h1>
}

export { TitleSubheading }