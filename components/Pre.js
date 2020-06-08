/**
 * PRE
 * components/Pre.js
 * Highlight code.
 * {@link https://prismjs.com/}
 * {@link https://betterstack.dev/blog/code-highlighting-in-react-using-prismjs/}
 */

/**
 * MODULES
 */
import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Prism from 'prismjs';
import styled from 'styled-components';

/**
 * DEFAULT EXPORT
 */
export default function Pre(props) {
  const { children: code } = props;
  // const codeEl = useRef(null);

  // useEffect(() => {
  //   if (codeEl && codeEl.current) {
  //     Prism.highlightElement(codeEl.current);
  //   }
  // });
  Prism.manual = true;
  const highlighedCode = () => ({
    __html: Prism.highlight(code, Prism.languages.javascript, 'javascript'),
  });

  return (
    <Pree
      className="language-javascript"
    >
      <code
        className="language-javascript"
        dangerouslySetInnerHTML={highlighedCode()}
      />
      {/* <code
        ref={codeEl}
        className="language-javascript"
        >
        {code}
      </code> */}
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
