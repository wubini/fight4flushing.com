import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import Footer from './Footer'
import Navbar from './Navbar'
import './all.sass'
import useSiteMetadata from './SiteMetadata'
import { navigate } from 'gatsby'

const TemplateWrapper = ({ children }) => {
  const [count] = useState(0);

  useEffect(() => {
    navigate('https://act.fight4flushing.com/petitions/stop-the-growing-displacement-and-high-rent-crisis-in-flushing')
  }, [count])

  return null
}

export default TemplateWrapper
