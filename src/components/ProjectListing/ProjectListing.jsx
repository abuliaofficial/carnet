import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import Palette from 'react-palette';
import styles from './ProjectListing.module.scss';

export default class ProjectListing extends React.PureComponent {
  getList() {
    const List = [];
    this.props.artEdges.forEach(artEdge => {
      console.log(artEdge);
      List.push({
        path: artEdge.node.fields.slug,
        cover: artEdge.node.frontmatter.cover.childImageSharp.sizes,
        title: artEdge.node.frontmatter.title,
        excerpt: artEdge.node.excerpt,
        material: artEdge.node.frontmatter.material,
        imageURL: artEdge.node.frontmatter.cover.childImageSharp.sizes.src,
      });
    });
    return List;
  }
  render() {
    const List = this.getList();
    return (
      <div className={styles.base}>
        {List.map(project => (
          <div key={project.path} className={styles.wrapper}>
            <div className={styles.content}>
              <div className={styles.image}>
                <Img sizes={project.cover} />
              </div>
              <Link to={project.path} key={project.path} className={styles.link}>
                <Palette image={project.imageURL}>
                  {palette => <div className={styles.overlay} style={{ backgroundColor: palette.vibrant }} />}
                </Palette>
                <h2 className={styles.client} key={project.title}>
                  {project.title}
                </h2>
                <div className={styles.service} key={project.material}>
                  {project.material}
                </div>
                <div className={styles.excerpt} key={project.excerpt}>
                  {project.excerpt}
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
