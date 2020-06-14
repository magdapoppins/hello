import React from "react"
import { PromptLine, colors } from "../utils/styles"
import styled from "styled-components"

const PromptInput = styled('input')({
    border: 0,
    outline: 0,
    backgroundColor: 'transparent',
    color: colors.blue,
})

const Prompt = ({onEnterAction}) => {
    return <div style={{display: 'flex'}}>
        <PromptLine style={{fontWeight: 'bold'}}>hello@magdapoppins.github.io&gt;</PromptLine>&nbsp;
        <PromptInput
            autoFocus
            onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                        onEnterAction(e.target.value)
                        e.target.value = ''
                    }
                }
            }
        />
    </div>
}

export default Prompt