/**
 * IMAGE
 * components/Image.js
 * Animate in responsive image when visible.
 * Lazy load image if available in browser.
 * Generate reponsive srcset.
 */

/**
 * MODULES
 */
import PropTypes from 'prop-types';
import { useIntersection } from 'react-use';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';


/**
 * DEFAULT EXPORT
 */
export default function Image(props) {
  const {
    alt, src, h, w, loading,
  } = props;

  /* Browser intersection observer for Image. */
  const intersectionRef = React.useRef(null);
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.5, // Observe when half the target is visible.
  });

  /* Animate in image based on intersection observer. */
  const imgControls = useAnimation();
  if (intersection && intersection.intersectionRatio > 0.5) {
    imgControls.start({
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.45, 0.05, 0.55, 0.95],
      },
    });
  }

  /* Set source paths for srcSet */
  const pathAndName = src.substring(0, src.lastIndexOf('.'));
  const fileExtension = src.substring(src.lastIndexOf('.'));
  const src1200 = `${pathAndName}-1200${fileExtension}`;
  const src640 = `${pathAndName}-640${fileExtension}`;

  return (
    /* Image resides in wrap with intrinsic aspect ratio. This prevents page height jittering when image loads. */
    <Wrap h={h} w={w} ref={intersectionRef}>
      <Img
        srcSet={`${src640} 640w, ${src1200} 1200w`}
        sizes="(max-width: 640px) 640px, 1200px"
        loading={loading && 'lazy'}
        alt={alt}
        initial={{ scale: 0.95 }}
        animate={imgControls}
      />
    </Wrap>
  );
}

/**
 * PROPTYPES
 */
Image.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  h: PropTypes.string.isRequired,
  w: PropTypes.string.isRequired,
  loading: PropTypes.string.isRequired,
};

/**
 * STYLED COMPONENTS
 */
const Wrap = styled.div`
  padding-bottom: ${(props) => `calc(${props.h} / ${props.w} * 100%)`};
  position: relative;
`;

const Img = styled(motion.img)`
  //height: 100%;
  left: 0;
  top: 0;
  position: absolute;
  width: 100%;
`;
