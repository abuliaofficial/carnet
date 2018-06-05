import React from 'react';
import Helmet from 'react-helmet';
import Header from '../components/Header/Header';
import Container from '../components/Container/Container';
import Footer from '../components/Footer/Footer';
import config from '../../config/SiteConfig';

const Contact = () => (
  <div className="container contact-container">
    <Helmet title={`Contact | ${config.siteTitle}`} />
    <Header>Contact</Header>
    <Container text>
      <h1>Contact me!</h1>
  We are the first social media based democracy. You can do more than contact us, you can become us!<br/>
  Do the right thing: follow us on twitter or join our group on Facebook. This will automatically give you citizenship. Check the top right corner, you are 2 clicks away of gaining a new nationality.<br/>
  What does it do for your national identity? You tell us...
    </Container>
    <Footer />
  </div>
);

export default Contact;
