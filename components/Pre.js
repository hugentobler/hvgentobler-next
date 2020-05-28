/**
 * PRE
 * components/Pre.js
 * Highlight code.
 * {@link https://prismjs.com/}
 */

/**
 * MODULES
 */
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import Prism from 'prismjs';
import styled from 'styled-components';

/**
 * DEFAULT EXPORT
 */
export default function Pre(props) {
  const { children } = props;
  useEffect(() => {
    Prism.highlightAll();
  });

  return (
    <Pree>
      <code className="language-javascript">
        {children}
      </code>
    </Pree>
  );
}

/**
 * PROPTYPES
 */
Pre.propTypes = {
  children: PropTypes.string.isRequired,
};

/**
 * STYLED COMPONENTS
 */
const Pree = styled.pre`
  margin: var(--space-4) 0 !important;
`;
