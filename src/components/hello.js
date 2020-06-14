import React from "react"
import { colors } from "../utils/styles"
import Banner from "./banner"
import Actions from "./actions"

const Hello = () => {
    return <div style={{color: colors.blue}}>
        <Banner />
        <Actions />
    </div>
}

export default Hello