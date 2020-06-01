import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import LogoBlack from "../images/logo-black.png"

function getTitle(defaultTitle) {
  let num = Math.random()

  if (num < 0.70) {
    return defaultTitle
  } else if (num < 0.85) {
    return `Low bass and high availability`
  } else if (num < 0.95) {
    return `Dope beats on Kubernetes`
  } else {
    return `Serving fire mixtapes globally from Hotlanta to East Dakota`
  }
}

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  let defaultTitle = data.site.siteMetadata.title

  return (
    <header
      style={{
        background: `#f50`,
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          margin: `0 0`,
          maxWidth: 900,
          padding: `1.0875rem`,
        }}
      >
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
          <p style={{ display: `inline-block`, width: `20%`, margin: 0, verticalAlign: `bottom` }}>
            <img src={LogoBlack} alt="SoundCloudFlare"/>
          </p>
          <p style={{ display: `inline`, verticalAlign: `text-bottom` }}>
            <h1 style={{ display: `inline` }}>
              {getTitle(defaultTitle)}
            </h1>
          </p>
        </Link>
      </div>
    </header>
  )
}

export default Header
