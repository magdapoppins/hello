import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"
import styled from 'styled-components'
import { colors } from "../utils/styles"

const TerminalLine = styled('div')({
  color: colors.cream,
  fontWeight: 'bold',
  display: 'block',
  width: '100%',
})

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div
      style={{
        // display: `flex`,
        // marginBottom: rhythm(2.5),
      }}
    >
      {/* <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author.name}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      /> */}
      <TerminalLine>#####</TerminalLine><br />
      <TerminalLine>CV of {author.name}, {author.summary}</TerminalLine><br />
      <TerminalLine>
        <a href={`https://twitter.com/${social.twitter}`}>
          You should follow her on Twitter
        </a>
      </TerminalLine><br />
      <TerminalLine>#####</TerminalLine><br />
      <TerminalLine>hello@magdapoppins.github.io</TerminalLine><br />
    </div>
  )
}

export default Bio
