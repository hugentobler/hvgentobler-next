/**
 * Animations
 * components/ui/Animations.js
 * Shared animations
 */

export const fadeIn = {
  visible: {
    opacity: 1,
    transition: {
      delay: 0.8,
      duration: 0.15,
      ease: 'easeIn',
    },
  },
  hidden: {
    opacity: 0,
  },
};

const Animations = {
  fadeIn,
};

export default Animations;
