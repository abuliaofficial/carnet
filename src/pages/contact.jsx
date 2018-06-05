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

<p>  According to the provisions of the Constitution of the Republic of Abulia, any person who joins the designated online group, forum or message board, or follows one of the Official channels of Abulia of social media , is declared a citizen of the state of Abulia and as such can enjoy full rights and privileges.</p>

<p>Abulia is a country open to all with an online profile.
Abulia’s borders stretch out across the world.</p>
 
 
<h2>Become a citizen yourself</h2>
  <ul>
<li><a href='https://facebook.com/visitabulia'>FACEBOOK.COM/VISITABULIA</a></li>
<li><a href='https://twitter.com/visitabulia'>TWITTER.COM/VISITABULIA</a></li>
  </ul>
  <p>We are the first social media based democracy. You can do more than contact us, you can become us!<br/>
  Do the right thing: follow us on twitter or join our group on Facebook. This will automatically give you citizenship. Check the top right corner, you are 2 clicks away of gaining a new nationality.</p>
<p>  What does it do for your national identity? You tell us...</p>
    </Container>
    <Footer />
  </div>
);

export default Contact;
