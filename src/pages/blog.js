import * as React from "react";
import Layout from "../components/layout";
import Header from "../components/header";
import Hero from "../components/hero";
import Contactform from "../components/contactform";
import { StaticImage } from "gatsby-plugin-image";
import Arrow from "../assets/Arrow1.svg"

const Blog = () => {
  return (
    <Layout>
      <Hero className="on-hero blog">
        <StaticImage
          src="../images/hero-blog.png"
          alt="Blog"
          placeholder="blurred"
          layout="fullWidth"
          className="hero"
        />
        <Header pageName="home" />
        <div className="hero-title subpage">
          <h2>Blog</h2>
          <h3 className="line-before">poznaj lorem ipsum</h3>
        </div>
      </Hero>
      <section className="blog-wrapper">
        <div className="post-wrapper">
          <h4>Tytuł wpisu bloga</h4>
          <span className="body-small">Dodano: 30.03.2021</span>
          <Arrow className="icon-white down" />
          <p>
            Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w
            przemyśle poligraficznym. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
        </div>
        <div className="post-wrapper">
          <h4>Tytuł wpisu bloga</h4>
          <span className="body-small">Dodano: 30.03.2021</span>
          <Arrow className="icon-white down" />
          <p>
            Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w
            przemyśle poligraficznym. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
        </div>
        <div className="post-wrapper">
          <h4>Tytuł wpisu bloga</h4>
          <span className="body-small">Dodano: 30.03.2021</span>
          <Arrow className="icon-white down" />
          <p>
            Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w
            przemyśle poligraficznym. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
        </div>
        <div className="post-wrapper">
          <h4>Tytuł wpisu bloga</h4>
          <span className="body-small">Dodano: 30.03.2021</span>
          <Arrow className="icon-white down" />
          <p>
            Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w
            przemyśle poligraficznym. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
        </div>
      </section>
      <Contactform />
    </Layout>
  );
};

export default Blog;
