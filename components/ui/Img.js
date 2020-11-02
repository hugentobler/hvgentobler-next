/**
 * IMG
 * components/Img.js
 * Wrapper for next/image module with load animation.
 * https://nextjs.org/docs/api-reference/next/image
 */

/**
 * MODULES
 */
import { m as motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
/* Components */
import Image from 'next/image';
import { fadeIn } from './Animations';

/**
 * DEFAULT EXPORT
 */
export default function Img(props) {
  /* Browser intersection observer for Image. */
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <motion.div
      initial="hidden"
      animate={inView ? 'visible' : ''}
      variants={fadeIn}
      ref={ref}
    >
      <Image
        {...props}
        quality={90}
      />
    </motion.div>
  );
}
