/**
 * POST
 * components/Post.js
 * Format post content.
 */

/**
 * MODULES
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * DEFAULT EXPORT
 */
export default function Post(props) {
  const { children } = props;

  const Content = () => (
    React.Children.map(children, (e) => {
      if (e.type === 'wrap') {
        const c = React.Children.toArray(e.props.children);
        /* he last element is floated to the RHS. */
        const right = c.pop();
        return (
          <Wrap>
            <Left>{c}</Left>
            <Right>{right}</Right>
          </Wrap>
        );
      }
      if (e.type === 'lede') return <Lede>{e.props.children}</Lede>;
      return e;
    })
  );

  return (
    <Section>
      <Content />
    </Section>
  );
}

/**
 * PROPTYPES
 */
Post.propTypes = {
  children: PropTypes.node.isRequired,
};

/**
 * STYLED COMPONENTS
 */
const theme = {
  contentWidth: '640px',
  forNotSmall: 'screen and (min-width: 999px)',
};

const Section = styled.section`
  max-width: ${theme.contentWidth};
`;

const Wrap = styled.div`
  @media ${theme.forNotSmall} {
    display: flex;
  }
`;

const Left = styled.div`
  @media ${theme.forNotSmall} {
    flex-shrink: 0;
    width: 80%;
  }
`;

const Right = styled.div`
  @media ${theme.forNotSmall} {
    flex-shrink: 0;
    margin-left: var(--space-4);
    margin-bottom: calc(-1 * var(--space-1));
    margin-top: calc(-1 * var(--space-1));
    width: calc(var(--max-width) - 600px);
  }
`;

const Lede = styled.p`
  font-size: 1.2rem;
`;
