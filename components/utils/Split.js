/**
 * SPLIT
 * Split string into words for animation
 * components/utils/Split.js
 */

/**
 * MODULES
 */
import { m as motion } from 'framer-motion';

const word = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      damping: 300,
      duration: 0.15,
      type: 'spring',
    },
  },
  hidden: { opacity: 0, y: '100%' },
};

/**
* DEFAULT EXPORT
*/
export default function Split(heading) {
  /* Typecheck. */
  if (typeof heading !== 'string') console.warn('Expected string.');

  const text = heading.split(' ');
  const words = text.map((e) => (
  /* Animation staggers in from the parent */
    <>
      <motion.span
        variants={word}
      >
        {e}
        &nbsp;
      </motion.span>
    </>
  ));

  return (
    <>
      {words.map((e, i) => (
        // eslint-disable-next-line react/no-array-index-key
        React.cloneElement(e, { key: `${e.props.children}-${i}` })
      ))}
    </>
  );
}
