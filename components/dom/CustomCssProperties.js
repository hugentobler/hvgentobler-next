/**
 * CUSTOM CSS PROPERTIES
 * components/dom/CustomCssProperties.js
 * If page has special styles defined here,
 * the default styles in _variables.scss will be reset.
 */

/**
* DEFAULT EXPORT
*/
export default (colour) => {
  /* Typecheck. */
  if (typeof colour !== 'string') console.warn('Expected pathname as string.');

  /* Pages and custom styles. */
  const pageStyles = {
    default: ['--white', '--black'],
    night: ['--black', '--white'],
    blue: ['--classic-blue', '--white'],
    salmon: ['--salmon', '--white'],
  };

  /* Is there a custom style for active page? */
  const updateProperties = pageStyles[colour];

  /* Update the custom css if above is yes. */
  if (updateProperties) {
    document.documentElement.style.setProperty('--background-color', `var(${pageStyles[colour][0]})`);
    document.documentElement.style.setProperty('--text-color', `var(${pageStyles[colour][1]})`);
  }

  return null;
};
