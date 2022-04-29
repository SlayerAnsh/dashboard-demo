import React from 'react'
import Rating from './Rating'

interface FeedbackProps {

}
export default function Feedback(props: FeedbackProps) {
    const { } = props

    return (
        <div className="flex flex-col items-center justify-center gap-4 p-4 bg-base-200 min-h-screen w-full">
            <div className="w-11/12 bg-base-100 p-6 rounded-lg border shadow-md flex flex-col items-center gap-4">
                <h1 className="text-3xl font-bold" >Feedback</h1>
                <Rating maxRating={5} />
            </div>
        </div>
    )
}