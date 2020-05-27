/**
 * CUSTOM CSS PROPERTIES
 * components/CustomCssProperties.js
 * If page has special styles defined here,
 * the default styles in _variables.scss will be reset.
 */

/**
* DEFAULT EXPORT
*/
export default (pathname) => {
  /* Check type. */
  if (typeof pathname !== 'string') console.warn('Expected pathname as string.');

  /* Pages and custom styles. */
  const pageStyles = {
    '/': ['--black', '--white'],
    '/25th': ['--classic-blue', '--yellow'],
  };

  /* Is there a custom style for active page? */
  const updateProperties = pageStyles[pathname];

  /* Update the custom css if above is yes. */
  if (updateProperties) {
    document.documentElement.style.setProperty('--background-color', `var(${pageStyles[pathname][0]})`);
    document.documentElement.style.setProperty('--text-color', `var(${pageStyles[pathname][1]})`);
  }

  return null;
};
