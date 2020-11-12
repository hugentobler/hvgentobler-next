/**
 * DisqusEmbed
 * components/DisqusEmbed.js
 */

/**
 * MODULES
 */
import { DiscussionEmbed } from 'disqus-react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

/**
 * DEFAULT EXPORT
 */
export default function DisqusEmbed(props) {
  const { asPath } = useRouter();
  const { title } = props;
  return (
    <Section>
      <Grid>
        <DiscussionEmbed
          shortname="hvgentobler"
          config={
            {
              url: `https://hvgentobler.com${asPath}`,
              identifier: asPath,
              title,
            }
          }
        />
      </Grid>
    </Section>
  );
}

/**
 * PROPTYPES
 */
DisqusEmbed.propTypes = {
  title: PropTypes.string.isRequired,
};

/**
 * STYLED COMPONENTS
 */
const Section = styled.section`
  background-color: var(--sand) !important;
  padding: var(--space-6) var(--space-2);
`;

const Grid = styled.div`
  column-gap: var(--space-1);
  display: grid;
  grid-template-columns: repeat(13, 1fr);
  > div {
    grid-column: 1 / span 13;
    @media ${(props) => props.theme.forMiddle} {
      grid-column: 4 / span 8;
    }
    @media ${(props) => props.theme.forNotSmall} {
      grid-column: 4 / span 8;
    }
  }
`;
