import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"
import { colors } from "../utils/styles"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    )
  }
  return (
    <div style={{position: 'fixed', left: 0, right: 0, top: 0, bottom: 0, backgroundColor: colors.cream}}>
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: '80%',
          padding: `1em`,
        }}
        >
        {/* <header>{header}</header> */}
        <main style={{fontFamily: 'courier'}}>{children}</main>
        {/* <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer> */}
      </div>
    </div>
  )
}

export default Layout
