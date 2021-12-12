import React from 'react'

const Footer = (props: any) => {
    return <span className="text-gray-500 mt-6 block text-xs">&#169; {props.children} {new Date().getFullYear()}</span>
}

export { Footer }