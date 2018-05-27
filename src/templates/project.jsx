import React from 'react';
import Helmet from 'react-helmet';
import { Fade } from 'react-reveal';
import Img from 'gatsby-image';
import Palette from 'react-palette';
import config from '../../config/SiteConfig';
import SEO from '../components/SEO/SEO';
import Footer from '../components/Footer/Footer';
import Container from '../components/Container/Container';
import styles from './project.module.scss';
import ProjectPagination from '../components/ProjectPagination';

const Project = props => {
  const { slug, next, prev } = props.pathContext;

  const postNode = props.data.markdownRemark;
  const project = postNode.frontmatter;
  const imageURL = project.cover.childImageSharp.resize.src;
  if (!project.id) {
    project.id = slug;
  }
  return (
    <div className="container project-container">
      <Helmet title={`${project.title} | ${config.siteTitle}`} />
      <SEO postPath={slug} postNode={postNode} postSEO />
      <div className={styles.headerWrapper}>
        <Palette image={imageURL}>
          {palette => (
            <section className={styles.header} style={{ backgroundColor: palette.vibrant }}>
              <div className={styles.title}>
                <Fade down duration={1250} tag="h1">
                  {project.title}
                </Fade>
              </div>
              <div className={styles.information}>
                <div className={styles.infoBlock}>
                  <Fade up duration={1250} className={styles.top}>
                    {config.client}
                  </Fade>

                  <Fade up duration={1250} delay={500} className={styles.bottom}>
                    {project.client}
                  </Fade>
                </div>
                <div className={styles.infoBlock}>
                  <Fade up duration={1250} className={styles.top}>
                    {config.date}
                  </Fade>
                  <Fade up duration={1250} delay={500} className={styles.bottom}>
                    circa 1842
                  </Fade>
                </div>
                <div className={styles.infoBlock}>
                  <Fade up duration={1250} className={styles.top}>
                    {config.service}
                  </Fade>
                  <Fade up duration={1250} delay={500} className={styles.bottom}>
                    {project.material}
                  </Fade>
                </div>
                <div className={styles.infoBlock}>
                  <Fade up duration={1250} className={styles.top}>
                    <ProjectPagination next={next} prev={prev} />
                  </Fade>
                </div>
              </div>
            </section>
          )}
        </Palette>
      </div>
      <Container>
         <div className={styles.image}>
         <img src={project.cover.childImageSharp.resize.src} alt={project.title}/>

        </div>
        <div className={styles.content} dangerouslySetInnerHTML={{ __html: postNode.html }} />
      </Container>
      <Footer />
    </div>
  );
};

export default Project;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query ProjectPostBySlug($slug: String!) {
    markdownRemark(
      fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD.MM.YYYY")
        client
        material
        cover {
          childImageSharp {
            sizes(maxWidth: 1600, quality: 90, traceSVG: { color: "#328bff" }) {
              ...GatsbyImageSharpSizes_withWebp_tracedSVG
            }
            resize(width: 1600) {
              src
            }
          }
        }
      }
      fields {
        slug
      }
      excerpt
    }
  }
`;
