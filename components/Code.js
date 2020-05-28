/**
 * CODE
 * components/Code.js
 * Highlight code.
 * {@link https://prismjs.com/}
 */

/**
 * MODULES
 */
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import Prism from 'prismjs';

/**
 * DEFAULT EXPORT
 */
export default function Code(props) {
  const { children } = props;
  useEffect(() => {
    Prism.highlightAll();
  });

  return (
    <code className="language-javascript">
      {children}
    </code>
  );
}

/**
 * PROPTYPES
 */
Code.propTypes = {
  children: PropTypes.string.isRequired,
};
