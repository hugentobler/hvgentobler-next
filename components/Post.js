/**
 * POST
 * components/Post.js
 * Format post content.
 */

/**
 * MODULES
 */
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * DEFAULT EXPORT
 */
export default function Post(props) {
  const { children } = props;

  const Content = () => (
    React.Children.map(children, (child) => {
      if (child.type === 'wrap') {
        const left = React.Children.toArray(child.props.children);
        /* he last element is floated to the RHS. */
        const right = left.pop();
        return (
          <Wrap>
            <Left>{left}</Left>
            <Right>{right}</Right>
          </Wrap>
        );
      }
      if (child.type === 'lede') return <Lede>{child.props.children}</Lede>;
      return child;
    })
  );

  return (
    <section>
      <Article>
        <Content />
      </Article>
    </section>
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
  contentWidth: '600px',
  forNotSmall: 'screen and (min-width: 999px)',
};

const Article = styled.article`
  max-width: ${theme.contentWidth};
  padding: 0 var(--space-2);
  @media ${theme.forNotSmall} {
    padding: 0;
  }
`;

const Wrap = styled.div`
  @media ${theme.forNotSmall} {
    display: flex;
  }
`;

const Left = styled.div`
  @media ${theme.forNotSmall} {
    flex-shrink: 0;
    width: 100%;
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
  line-height: 1.6rem;
`;
