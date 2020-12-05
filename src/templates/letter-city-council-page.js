import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import letterPDF from '../pdfs/letter-city-council.pdf'
import letterP1 from '../img/letter/0001.jpg'
import letterP2 from '../img/letter/0002.jpg'
import letterP3 from '../img/letter/0003.jpg'
import letterP4 from '../img/letter/0004.jpg'
import letterP5 from '../img/letter/0005.jpg'
import letterP6 from '../img/letter/0006.jpg'

export const LetterCityCouncilPageTemplate = ({
  image,
  title,
  cityCouncil,
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
        <h4 className="has-text-weight-semibold is-size-3">{cityCouncil.title}</h4>
        <p>{cityCouncil.text}</p>
        <a href={letterPDF}>Or download it here!</a>
        <div className="column">
          <img src={letterP1} />
          <img src={letterP2} />
          <img src={letterP3} />
          <img src={letterP4} />
          <img src={letterP5} />
          <img src={letterP6} />
        </div>
      </div>
    </section>
  </div>
)

LetterCityCouncilPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  cityCouncil: PropTypes.object,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  })
}

const LetterCityCouncilPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <LetterCityCouncilPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        cityCouncil={frontmatter.cityCouncil}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

LetterCityCouncilPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default LetterCityCouncilPage

export const getInvolvedPageQuery = graphql`
  query LetterCityCouncilPage($id: String!) {
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
        cityCouncil {
          title
          text
        }
        intro {
          heading
          description
        }
      }
    }
  }
`
