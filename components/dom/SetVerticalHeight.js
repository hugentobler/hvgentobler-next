/**
 * SET VERTICAL HEIGHT
 * components/dom/SetVerticalHeight.js
 * Fixing vh related jank when mobile scrollbar appears or hides
 */

/**
* DEFAULT EXPORT
*/
export default function SetVerticalHeight() {
  // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
  const vh = window.innerHeight * 0.01;
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  return null;
}
