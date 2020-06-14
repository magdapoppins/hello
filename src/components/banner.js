import React from "react"
import styled from 'styled-components'
import { colors, PromptLine } from "../utils/styles"


const BannerText = styled('pre')({
    lineHeight:'1.1em',
    fontWeight: 'bold',
    color: colors.green,
    textShadow: `0 0 10px ${colors.green}, 0 0 20px ${colors.green}, 0 0 30px ${colors.green}, 0 0 40px ${colors.green}`,
    marginBottom: '.4em',
})

const BannerContainer = styled('div')({
    paddingBottom: '1.2em'
})

const Banner = () => {
    return <BannerContainer>
        <BannerText style={{lineHeight:'1.1em'}}>
    .                          _                               _            <br/>
    ._ __ ___   __ _  __ _  __| | __ _ _ __   ___  _ __  _ __ (_)_ __  ___  <br/>
    | '_ ' _ \ / _' |/ _' |/ _' |/ _' | '_ \ / _ \| '_ \| '_ \| | '_ \/ __| <br/>
    | | | | | | (_| | (_| | (_| | (_| | |_) | (_) | |_) | |_) | | | | \__ \ <br/>
    |_| |_| |_|\__,_|\__, |\__,_|\__,_| .__/ \___/| .__/| .__/|_|_| |_|___/ <br/>
    .                |___/            |_|         |_|   |_|                 <br/>
        </BannerText>
        <PromptLine style={{color: colors.green}}>This is the portfolio of Magdalena Stenius.🧚‍♂️</PromptLine>
        <PromptLine style={{color: colors.green}}>Type <b>start</b> to get started.</PromptLine>
    </BannerContainer>
}

export default Banner