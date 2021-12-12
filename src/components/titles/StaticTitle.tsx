import React from 'react'

const StaticTitle = (props: any) => {
    return <h1 className={`text-4xl font-extrabold uppercase ${props.className}`}>{props.children}</h1>
}

export { StaticTitle }