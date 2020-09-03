/**
 * LOG CONSOLE
 * components/dom/LogConsole.js
 * Fun console logs.
 */

/**
* DEFAULT EXPORT
*/
export default () => {
  const styles1 = [
    'font-family: monospace',
    'font-size: 2em',
    'line-height: 1.25',
  ].join(';');

  const styles2 = [
    'font-family: monospace',
    'font-size: 1.5em',
    'line-height: 1.25',
  ].join(';');

  console.log('%c"This is the new world. And in this world, you can be whoever the fuck you want."', styles1);
  console.log('%c- Maeve Millay', styles2);

  return null;
};
