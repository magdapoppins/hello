import React from "react"
import styled from 'styled-components'
import { colors, PromptLine } from "../utils/styles"

const ActionCell = styled('td')({
    border: 'none',
    padding: '0',
})

const Actions = () => {
    const actions = {
        'about': 'read more about me',
        'CV': 'view resume',
        'turku.py': 'read about Python meetups in Turku',
        'recipe': 'get yourself a random recipe --easy --vegan --comfortfood',
    }

    return <>
        <PromptLine>Available commands:</PromptLine>
        <table>
            <tbody>
                {Object.keys(actions).map(a => <tr key={a}>
                    <ActionCell style={{fontWeight: 'bold'}}>{a}</ActionCell>
                    <ActionCell>{actions[a]}</ActionCell>
                </tr>)}
            </tbody>
        </table>
    </>
}

export default Actions