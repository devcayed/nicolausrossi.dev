import React from 'react'

const Hyperlink = (props: any) => {
    return (
        <a className={`${props.className}`} href={props.link ? props.link : '#'} target="_blank" rel="noreferrer">
            <div className="flex items-center">
                {props.icon}
                <span className="pl-2 uppercase tracking-wider text-lg">
                    {props.name}
                </span>
            </div>
        </a>
    )
}

export { Hyperlink }
