import React from 'react';
import Helmet from 'react-helmet';
import Header from '../components/Header/Header';
import Container from '../components/Container/Container';
import Footer from '../components/Footer/Footer';
import config from '../../config/SiteConfig';

const About = () => (
  <div className="container about-container">
    <Helmet title={`About | ${config.siteTitle}`} />
    <Header>About</Header>
    <Container text>
      <h1>Hi!</h1>
      <p>
  This website is the digital home of the travelog of Gsawery von Dach, who discovered Abulia and claimed it for the Polish and Swiss rulers. According to his writing, the native Abulians didn't mind, and the past is the past.
      </p>
  <p>
  This was a project presented for the parcours d'artistes in 2018, wondering what is national identity, what to do with fake news and why rinocepig's bacon is so yummy.
  </p>
  <p>
  We might add new texts and newly discovered pages from the travelog. Or move to other projects. We'll see how it goes.
  </p>
    </Container>
    <Footer />
  </div>
);

export default About;
