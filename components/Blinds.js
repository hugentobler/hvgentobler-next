/**
 * BLINDS
 * components/Blinds.js
 * The vertical blinds / curtains.
 */

/**
 * MODULES
 */
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion, useAnimation } from 'framer-motion';
import styled from 'styled-components';

/**
 * ANIMATIONS
 */
const blindVariants = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0,
    },
  },
};

const fillVariants = {
  hidden: {
    scaleX: 0,
  },
  open: {
    scaleX: 1,
    transition: {
      duration: 0.4,
      ease: [0.45, 0.05, 0.55, 0.95],
    },
  },
  close: {
    scaleX: 0,
    transition: {
      duration: 0.4,
      ease: [0.45, 0.05, 0.55, 0.95],
    },
  },
  exit: {
    scaleX: [0, 1, 0],
    transition: {
      duration: 0.4,
      ease: [0.45, 0.05, 0.55, 0.95],
      times: [0, 0.5, 1],
    },
  },
};

/**
 * DEFAULT EXPORT
 */
export default function Blinds(props) {
  const { menuOpen, animateMenu } = props;

  const fillControls = useAnimation();
  const blindControls = useAnimation();

  useEffect(() => {
    if (menuOpen) {
      blindControls.start('visible').then(() => {
        fillControls.start('open');
      });
    } else {
      fillControls.start('close').then(() => {
        blindControls.start('hidden');
      });
    }
  }, [menuOpen]);

  /* One of the blinds will notify Motion when animation is ended. */
  const onComplete = () => {
    animateMenu(false);
  };

  return (
    <Wrap
      menuOpen={menuOpen}
    >
      <Side />
      <Inner>
        {[...Array(5)].map((e, i) => (
          <Blind
            key={i} // eslint-disable-line react/no-array-index-key
            animate={blindControls}
            variants={blindVariants}
          >
            <Fill
              animate={fillControls}
              exit={{ opacity: 0 }}
              variants={fillVariants}
              menuOpen={menuOpen}
            />
          </Blind>
        ))}
        <Blind
          animate={blindControls}
          variants={blindVariants}
        >
          <Fill
            animate={fillControls}
            variants={fillVariants}
            onAnimationComplete={onComplete}
            menuOpen={menuOpen}
          />
        </Blind>
      </Inner>
      <Side />
    </Wrap>
  );
}

/**
 * PROPTYPES
 */
Blinds.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
  animateMenu: PropTypes.func.isRequired,
};

/**
 * STYLED COMPONENTS
 */
const Wrap = styled.div`
  display: flex;
  height: 100%;
  left: 0;
  position: absolute;
  right: 0;
  //transition: visibility 0s .6s;
  top: 0;
  //visibility: hidden;
  transition-delay: ${(props) => (props.menuOpen ? '0s' : '.4s')};
  z-index: ${(props) => (props.menuOpen ? '999' : '0')};
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
  padding: var(--space-0);
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
  transform-origin: ${(props) => (props.menuOpen ? 'left' : 'right')};
  width: 100%;
`;
