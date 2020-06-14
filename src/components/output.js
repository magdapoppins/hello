import React from "react"

const Output = ({outputFeed}) => {
    return <>
        {outputFeed.map(o => <p>{o}</p>)}
    </>
}

export default Output