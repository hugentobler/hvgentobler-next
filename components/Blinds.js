// components/Blinds.js

// Modules
import { motion } from 'framer-motion';
import styled from 'styled-components';

const Blinds = () => (
  <Wrap>
    <Side>
      <Fill

      />
    </Side>
    {/*<Inner>
      {[...Array(6)].map((e, i) =>
        <Blind key={i}
      custom={i}
      initial='hidden'
      animate='visible'
        >
      <Fill
      initial='hidden'
      animate='visible'
      variants={fillVariants}
      />
        </Blind>
      )}
    </Inner>*/}
    <Side>
      <Fill
        variants={fillVariants}
        exit='exit'
      />
    </Side>
  </Wrap>
);

// Animations
const fillVariants = {
  exit: {
    width: ['0%', '100%', '0%'],
    transition: {
      duration: 2,
      times: [0, 0.5, 1]
    }
  }
}
// const fillVariants = {
//   fold: {
//     left: 'unset',
//     transition: { duration: 1, ease: [.45,.05,.55,.95] }
//   },
//   reset: {
//     right: 'unset',
//     left: '0',
//     transition: { duration: 2 }
//   },
//   unfold: {
//     right: '0',
//     transition: {
//       duration: 1,
//       ease: [.45,.05,.55,.95]
//     }
//   }
// }

// Styled components
const Wrap = styled.div`
  bottom: 0;
  display: flex;
  left: 0;
  position: fixed;
  right: 0;
  //transition: visibility 0s .6s;
  top: 0;
  //visibility: hidden;
  z-index: 0;
`;

const Side = styled(motion.div)`
  border-right: 1px solid var(--background-color);
  box-sizing: border-box;
  flex-grow: 1;
  position: relative;
`;

const Inner = styled.div`
  font-size: 0;
  height: 100%;
  max-width: var(--max-width);
  position: relative;
  width: 100%;
`;

const Blind = styled(motion.div)`
  border-right: 1px solid var(--background-color);
  box-sizing: border-box;
  display: inline-block;
  height: 100%;
  padding: var(--spacing-none);
  position: relative;
  vertical-align: top;
  width: calc(100% / 12 * 2);
  &:last-child {
    //border-right: none;
  }
`;

const Fill = styled(motion.div)`
  background-color: var(--text-color);
  bottom: 0;
  left: 0;
  position: absolute;
  //right: 0;
  top: 0;
  width: 0%;
`;

export default Blinds;
