/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 60, height: 60, quality: 95) {
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

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  const avatar = data?.avatar?.childImageSharp?.fixed

  return (
    <div className="flex
                    mx-5
                    xl:mx-10
                    my-5
                    space-x-3">
      <div className>
        {avatar && (
          <Image
            fixed={avatar}
            alt={author?.name || ``}
            className="rounded-full"
          />
        )}
      </div>
      <div>
        {author?.name && (
        <div>
            <p className="font-bold text-2xl">{author.name}</p>
            <p>{author?.summary || null}</p>
            <a
            className="underline text-blue-500" 
            href={`https://twitter.com/${social?.twitter || ``}`}>
              Twitter:@tosiiu
            </a>
        </div>
        )}
      </div>
    </div>
  )
}

export default Bio
