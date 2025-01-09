import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Row, Col, Button, Container } from "react-bootstrap"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "./home/home.scss"


import Hero from "./home/components/hero"
import Tours from "./home/components/tours"
import About from "./home/components/about"
import ToursMain from "./home/components/tours-featured"

const IndexPage = () => (
  <Layout>
    <Seo title="The Great Belize Outdoors" />
    <Hero />
    <Tours />
    <About />
    <ToursMain />
  </Layout>
)

export default IndexPage

