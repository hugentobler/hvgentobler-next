/**
 * CODE
 * components/Code.js
 * Highlight code.
 * {@link https://www.npmjs.com/package/highlight.js}
 */

/**
 * MODULES
 */
import PropTypes from 'prop-types';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';

/**
 * DEFAULT EXPORT
 */
export default function Code(props) {
  const { children: code } = props;

  hljs.registerLanguage('javascript', javascript);
  const highlight = hljs.highlight('javascript', code);

  const formattedCode = () => ({
    __html: hljs.fixMarkup(highlight.value),
  });

  return (
    <code
      className="hljs"
      dangerouslySetInnerHTML={formattedCode()}
      style={{ display: 'inline' }}
    />
  );
}

/**
 * PROPTYPES
 */
Code.propTypes = {
  children: PropTypes.string.isRequired,
};
