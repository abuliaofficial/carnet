import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

import arrowLeft from './left-chevron.svg';
import arrowRight from './right-chevron.svg';

const Wrapper = styled.div`
  display: flex;
  max-width: ${props => "1200px"};
  margin: 6rem auto;
  a {
    color: ${props => "black"};
    display: flex;
    align-items: center;
    font-size: 1.25rem;
  }
  justify-items: center;
`;

const Prev = styled.div`
  img {
    width: 25px;
    height: 25px;
    margin: 0 1rem 0 0;
  }
`;

const Next = styled.div`
  img {
    width: 25px;
    height: 25px;
    margin: 0 0 0 1rem;
  }
  margin-left: auto;
`;


const ProjectPagination = ({ next, prev }) => (
  <Wrapper>
    
    {prev && (
      <Prev>
        <Link to={prev.fields.slug} title={prev.frontmatter.title}>
          <img src={arrowLeft} alt="Arrow Left" />
          
        </Link>
      </Prev>
    )}

    {next && (
      <Next>
        <Link to={next.fields.slug} title={next.frontmatter.title}>
          <img src={arrowRight} alt="Arrow Right" />
        </Link>
      </Next>
    )}
  </Wrapper>
);

export default ProjectPagination;
