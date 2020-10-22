import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Features from '../components/Features'
import ControlShiftMapWidget from '../components/ControlShiftMapWidget'

export const GetInvolvedPageTemplate = ({
  image,
  title,
  events,
  publicComment,
  intro
}) => (
  <div className="content">
    <div
      className="full-width-image-container margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
      }}
    >
      <h2
        className="has-text-weight-bold is-size-1"
        style={{
          color: 'white',
          padding: '1rem',
        }}
      >
        {title}
      </h2>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-12">
              <h4 className="has-text-weight-semibold is-size-3">{events.title}</h4>
              <p>{events.text}</p>
              <ControlShiftMapWidget />
              <br />
              <br />
              <h4 className="has-text-weight-semibold is-size-3">{publicComment.title}</h4>
              <p>{publicComment.text}</p>
              <p><a href={publicComment.url} target="_blank" rel="noreferrer">{publicComment.clickHere}</a></p>
              {/* {intro.blurbs.length ?
                <>
                  <h3 className="has-text-weight-semibold is-size-3">
                    {intro.heading}
                  </h3>
                  <p>{intro.description}</p>
                  <Features gridItems={intro.blurbs} />
                </>
                :null} */}
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

GetInvolvedPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  events: PropTypes.object,
  publicComment: PropTypes.object,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  })
}

const GetInvolvedPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <GetInvolvedPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        events={frontmatter.events}
        publicComment={frontmatter.publicComment}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

GetInvolvedPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default GetInvolvedPage

export const getInvolvedPageQuery = graphql`
  query GetInvolvedPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        events {
          title
          text
        }
        publicComment {
          title
          text
          clickHere
          url
        }
        intro {
          heading
          description
        }
      }
    }
  }
`
