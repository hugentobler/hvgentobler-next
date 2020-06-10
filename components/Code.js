/**
 * CODE
 * components/Code.js
 * Highlight code.
 * {@link https://prismjs.com/}
 * {@link https://betterstack.dev/blog/code-highlighting-in-react-using-prismjs/}
 */

/**
 * MODULES
 */
import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

/**
 * DEFAULT EXPORT
 */
export default function Code(props) {
  const { children: code } = props;
  const codeEl = useRef(null);

  return (
    <code
      ref={codeEl}
      className="language-javascript"
    >
      {code}
    </code>
  );
}

/**
 * PROPTYPES
 */
Code.propTypes = {
  children: PropTypes.string.isRequired,
};
