/**
 * BACKGROUND
 * components/Background.js
 * The gray background and animated lines.
 */

/**
 * MODULES
 */
import { motion } from 'framer-motion';
import styled from 'styled-components';

/**
 * ANIMATIONS
 */
const lineVariants = {
  initial: {
    scaleY: 0,
  },
  visible: (i) => ({
    scaleY: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.9,
      ease: [0.45, 0.05, 0.55, 0.95],
    },
  }),
};

/**
 * DEFAULT EXPORT
 */
export default function Background() {
  return (
    <Wrap>
      <Inner>
        {[...Array(6)].map((e, i) => (
          <Line
            key={i} // eslint-disable-line react/no-array-index-key
            custom={i}
            initial="initial"
            animate="visible"
            variants={lineVariants}
          />
        ))}
      </Inner>
    </Wrap>
  );
}

/**
 * STYLED COMPONENTS
 */
const Wrap = styled.div`
  background-color: var(--background-color);
  font-size: 0;
  height: 100%;
  left: 0;
  right: 0;
  top: 0;
  position: absolute;
  z-index: 0;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  margin: 0 auto;
  max-width: var(--max-width);
  width: 100%;
`;

const Line = styled(motion.div)`
  flex-grow: 1;
  height: 100%;
  position: relative;
  transform-origin: top;
  &::after {
    border-right: 1px solid var(--text-color);
    bottom: 0;
    content: '';
    right: 0;
    top: 0;
    opacity: .25;
    position: absolute;
  }
  &:last-child::after { content: none; }
`;
