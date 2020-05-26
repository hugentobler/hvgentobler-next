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
  height: 0;
  position: relative;
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
