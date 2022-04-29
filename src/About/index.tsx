import React from 'react'

interface AboutProps {

}
export default function About(props: AboutProps) {
    const { } = props

    return (
        <div className="flex flex-col items-center justify-center gap-4 p-4 bg-base-200 min-h-screen w-full">
            <h1 className="text-3xl font-bold" >About</h1>
        </div>
    )
}