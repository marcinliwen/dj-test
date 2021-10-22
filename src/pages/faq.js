import * as React from "react";
import Contactform from "../components/contactform";
import Layout from "../components/layout";
import Header from "../components/header";
import Hero from "../components/hero";
import { GatsbyImage } from "gatsby-plugin-image";
import { StaticImage } from "gatsby-plugin-image";
import FaqInfo from "../components/faqinfo"



const Faq = () =>{
    return(
        <Layout>
            <Hero className="" >
        <StaticImage
          src="../images/hero-faq.png"
          alt="FAQ"
          placeholder="blurred"
          layout="fullWidth"
          className="hero"
        />
        <Header pageName="home" />
        <div className="hero-title subpage">
          <h2>FAQ</h2>
          <h3 className="line-before">poznaj lorem ipsum</h3>
        </div>
      </Hero>
      <section className="faq-wrapper">
          <FaqInfo />
      </section>
<Contactform />
        </Layout>
    )
}

export default Faq