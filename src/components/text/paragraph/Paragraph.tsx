import React from 'react'

const Paragraph = (props: any) => {
    return (
        <div className={`${props.className} text-lg`}>
            <p>{props.children}</p>
        </div>
    )
}

export { Paragraph }