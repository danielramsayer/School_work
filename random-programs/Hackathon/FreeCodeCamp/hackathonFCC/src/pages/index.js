import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <h1>Hello There Darlings!</h1>
    <p>Welcome to our new Gatsby site. Please, look around! Explore, and enjoy! </p>
    <p>We're here to build something great.</p>
    <img src="https://source.unsplash.com/random/400x200" alt="random image testing usability" />
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    <p><Link to="/contact/">Contact</Link></p>
    <p><Link to="/about/">About</Link></p>
  </Layout>
)

export default IndexPage
