// components/Blinds.js

// Modules
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import styled from 'styled-components';

const Blinds = props => {
  // Consume menuOpen from parent.
  const {menuOpen, animateMenu} = props;

  const fillControls = useAnimation();
  const blindControls = useAnimation();

  if (menuOpen) {
    blindControls.start('visible').then(() => {
      fillControls.start('open');
    })
  } else {
    fillControls.start('close').then(() => {
      blindControls.start('hidden');
    })
  }

  // One of the blinds will notify animation status.
  const onComplete = () => {
    animateMenu(false);
  }

  return (
    <Wrap
      menuOpen={menuOpen}
    >
      <Side>
        {/*<Fill
          animate='hidden'
          exit='exit'
          variants={fillVariants}
        />*/}
      </Side>
      <Inner>
        {[...Array(5)].map((e, i) =>
          <Blind key={i}
            animate={blindControls}
            exit='visible'
            variants={blindVariants}
          >
            <Fill
              animate={fillControls}
              exit='close'
              variants={fillVariants}
            />
          </Blind>
        )}
        <Blind
          animate={blindControls}
          exit='visible'
          variants={blindVariants}
        >
          <Fill
            animate={fillControls}
            exit='close'
            variants={fillVariants}
            onAnimationComplete={onComplete}
          />
        </Blind>
      </Inner>
      <Side>
        {/*<Fill
          animate='hidden'
          exit='exit'
          variants={fillVariants}
        />*/}
      </Side>
    </Wrap>
  )
};

// Animations
const blindVariants = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0
    }
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0
    }
  }
}

const fillVariants = {
  hidden: {
    width: '0%'
  },
  open: {
    width: '100%',
    transition: {
      duration: .4,
      ease: [.45,.05,.55,.95]
    }
  },
  close: {
    width: '0%',
    transition: {
      duration: .4,
      ease: [.45,.05,.55,.95]
    }
  },
  exit: {
    width: ['0%', '100%', '0%'],
    transition: {
      duration: .4,
      ease: [.45,.05,.55,.95],
      times: [0, 0.5, 1]
    }
  }
}

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
  transition-delay: ${props => props.menuOpen ? '0s' : '.4s'};
  z-index: ${props => props.menuOpen ? '999' : '0'};
`;

const Side = styled(motion.div)`
  border-right: 1px solid var(--background-color);
  box-sizing: border-box;
  flex-grow: 1;
  position: relative;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 0;
  height: 100%;
  max-width: var(--max-width);
  position: relative;
  width: 100%;
`;

const Blind = styled(motion.div)`
  border-right: 1px solid var(--background-color);
  box-sizing: border-box;
  flex-grow: 1;
  height: 100%;
  opacity: 0;
  padding: var(--spacing-none);
  position: relative;
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
