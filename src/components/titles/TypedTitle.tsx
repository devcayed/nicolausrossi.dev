import React from 'react'
import Typewriter from 'typewriter-effect'

const TypedTitle = (props: any) => {
    return (
        <h1 className="text-4xl typed-title">
            <Typewriter
                options={{
                    strings: props.strings,
                    autoStart: true,
                    loop: true,
                    delay: 'natural',
                    deleteSpeed: 'natural',
                    cursor: '_',
                    devMode: false
                }}
            />
        </h1>
    )
}

export { TypedTitle }