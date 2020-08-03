/**
 * Animations
 * components/ui/Animations.js
 * Shared animations
 */
export const fadeIn = {
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: 'easeOut',
    },
  },
  hidden: {
    opacity: 0,
  },
};

export const fadeInDelay = {
  visible: {
    opacity: 1,
    transition: {
      delay: 0.8,
      duration: 0.15,
      ease: 'easeOut',
    },
  },
  hidden: {
    opacity: 0,
  },
};

export const fadeInSlow = {
  visible: {
    opacity: 1,
    transition: {
      delay: 0.8,
      duration: 0.15,
      ease: 'easeOut',
    },
  },
  hidden: {
    opacity: 0,
  },
};

export const fadeInParent = {
  visible: {
    opacity: 1,
    transition: {
      duration: 0,
      easing: 'easeOut',
      staggerChildren: 0.1,
      when: 'beforeChildren',
    },
  },
  hidden: {
    opacity: 0,
  },
};

export const fadeInChild = {
  visible: {
    opacity: 1,
    transition: {
      duration: 0.45,
      ease: 'easeOut',
    },
  },
  hidden: {
    opacity: 0,
  },
};

export const headerParent = {
  visible: {
    opacity: 1,
    transition: {
      duration: 0.1,
      easing: 'easeOut',
      staggerChildren: 0.02,
      when: 'beforeChildren',
    },
  },
  hidden: { opacity: 0 },
};

const Animations = {
  fadeIn,
  fadeInDelay,
  fadeInParent,
  fadeInChild,
  headerParent,
};

export default Animations;
