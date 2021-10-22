import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Header from "../components/header";
import Hero from "../components/hero";
import HomeArtists from "../components/homeartists";
import Contactform from "../components/contactform";
import { StaticImage } from "gatsby-plugin-image";
import Mouse from "../assets/Mouse.svg";
import Arrow from "../assets/Arrow1.svg";
import Play from "../assets/Play.svg";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import ImageGallery from "react-image-gallery";
import "../components/gallery.css";
import Close from "../assets/close.svg";
import Video from "../components/video";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ZdjeciaiFilmy = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "gallery" } }) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  `);

  const [open, setOpen] = React.useState(false);

  const handleOpenGallery = () => {
    console.log("open gallery");
    setOpen(true);
  };
  const handleCloseGallery = () => {
    setOpen(false);
  };

  var newGalery = data.allFile.edges.map((item) => {
    return {
      original: item.node.childImageSharp.gatsbyImageData.images.fallback.src,
      fullscreen: item.node.childImageSharp.gatsbyImageData.images.fallback.src,
    };
  });

  return (
    <Layout>
      <Hero className="">
        <StaticImage
          src="../images/hero-zdjecia.png"
          alt="Zdjęcia i filmy"
          placeholder="blurred"
          layout="fullWidth"
          className="hero"
        />
        <Header pageName="home" />
        <div className="hero-title subpage">
          <h2>Zdjęcia i filmy</h2>
          <h3 className="line-before">poznaj lorem ipsum</h3>
        </div>
      </Hero>
      <section className="picture">
        <div>
          <h4>Zdjęcia</h4>
        </div>
        <div className="gallery-wrapper">
          {data.allFile.edges.map((image, index) => (
            <GatsbyImage
              image={image.node.childImageSharp.gatsbyImageData}
              className="gallery-open"
              alt="galeria"
              key={index}
              onClick={handleOpenGallery}
            />
          ))}
        </div>
      </section>
      <Dialog
        fullScreen
        open={open}
        onClose={handleCloseGallery}
        TransitionComponent={Transition}
        style={{ background: "#000" }}
        className="dialog-bg"
      >
        <button className="close-btn" onClick={handleCloseGallery}>
          <Close style={{ width: "45px", height: "45px" }} />
        </button>
        <ImageGallery
          items={newGalery}
          showPlayButton={false}
          lazyLoad={true}
        />
      </Dialog>
      <section className="movies">
        <div>
          <h4>Filmy</h4>
        </div>
        <div className="movies-wrapper">
          <Video
            videoSrcURL="https://www.youtube.com/embed/906TH7b6joI"
            videoTitle="Official Music Video on YouTube"
            videoId="906TH7b6joI"
            className="line-before"
          >
            <StaticImage
              src="../images/video-cover-1.png"
              alt="Zdjęcia i filmy"
              placeholder="blurred"
              layout="fullWidth"
              className="video-cover"
            />
          </Video>
          <Video
            videoSrcURL="https://www.youtube.com/embed/SEejivHRIbE"
            videoTitle="Official Music Video on YouTube"
            videoId="SEejivHRIbE"
            className="line-after"
          >
            <StaticImage
              src="../images/video-cover-2.png"
              alt="Zdjęcia i filmy"
              placeholder="blurred"
              layout="fullWidth"
              className="video-cover"
            />
          </Video>
          <Video
            videoSrcURL="https://www.youtube.com/embed/906TH7b6joI"
            videoTitle="Official Music Video on YouTube"
            videoId="906TH7b6joI"
            className="line-before"
            >
            <StaticImage
              src="../images/video-cover-3.png"
              alt="Zdjęcia i filmy"
              placeholder="blurred"
              layout="fullWidth"
              className="video-cover"
            />
          </Video>
          <Video
            videoSrcURL="https://www.youtube.com/embed/906TH7b6joI"
            videoTitle="Official Music Video on YouTube"
            videoId="906TH7b6joI"
            className="line-after"
            >
            <StaticImage
              src="../images/video-cover-4.png"
              alt="Zdjęcia i filmy"
              placeholder="blurred"
              layout="fullWidth"
              className="video-cover"
            />
          </Video>
        </div>
      </section>

      <Contactform />
    </Layout>
  );
};
export default ZdjeciaiFilmy;
