import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"
import Bio from "./bio"
import Nav from "./nav"

class Layout extends React.Component {
  render() {
    const { location, title, children, description, tag } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if ((location && location.pathname === rootPath) || tag) {
      header = (
        <>
          <h1
            style={{
              ...scale(1.8),
              marginBottom: 0,
              marginTop: 0,
            }}
          >
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`,
              }}
              to={`/`}
            >
              {title}
            </Link>
          </h1>
          <p
            style={{
              marginTop: `0`,
              paddingTop: `0`,
              marginBottom: rhythm(1.5),
            }}
          >
            {description}
          </p>
          <Bio />
          <Nav
            tagsForTab={["all", "algorithm", "knowledge", "studylog"]}
            location={location}
          />
        </>
      )
    } else {
      header = (
        <>
          <h3
            style={{
              fontFamily: `Montserrat, sans-serif`,
              marginTop: 0,
            }}
          >
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`,
              }}
              to={`/`}
            >
              {title}
            </Link>
          </h3>
        </>
      )
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header>{header}</header>

        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    )
  }
}

export default Layout
