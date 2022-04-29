import React, { useState } from 'react'

interface RatingProps {
    maxRating: number;
}
export default function Rating(props: RatingProps) {
    const { maxRating } = props
    const [currentRating, setCurrentRating] = useState(0)

    return (
        <div className="flex flex-col items-center gap-4 my-2">
            <div className="rating rating-lg gap-4">
                <input type="radio" name="rating" className="mask mask-star-2 bg-[#000] rating-hidden" checked />
                {[...Array(maxRating)].map((r, idx) => (
                    <input onChange={(e) => {
                        const checked = e.target.checked;
                        if (checked) setCurrentRating(idx + 1)
                    }} key={Math.random()} type="radio" name="rating" className="mask mask-star-2 bg-orange-400 " checked={idx < currentRating} />
                ))}
            </div>

            <button onClick={() => console.log(`CURRENT RATING::${currentRating}`)} className="btn btn-outline btn-primary">
                Console Rating
            </button>
        </div>
    )
}

