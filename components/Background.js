// components/Background.js

// Modules
import { motion } from 'framer-motion';
import styled from 'styled-components';

const Background = () => (
  <Wrap>
    <Inner>
        {[...Array(6)].map((e, i) =>
          <Line key={i}
            custom={i}
            initial='hidden'
            animate='visible'
            variants={lineVariants}
          />
        )}
    </Inner>
  </Wrap>
);

// Animations
const lineVariants = {
  visible: i => ({
    height: '100%',
    transition: {
      delay: i*.2,
      duration: .9,
      ease: [.45,.05,.55,.95],
    }
  })
}

// Styled components
const Wrap = styled.div`
  background-color: var(--background-color);
  bottom: 0;
  font-size: 0;
  left: 0;
  right: 0;
  top: 0;
  position: fixed;
  z-index: 0;
`;

const Inner = styled.div`
  height: 100%;
  margin: 0 auto;
  max-width: var(--max-width);
  width: 100%;
`;

const Line = styled(motion.div)`
  display: inline-block;
  height: 0;
  position: relative;
  vertical-align: top;
  width: calc(100% / 12 * 2);
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

export default Background;
