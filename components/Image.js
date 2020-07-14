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
import styled, { css } from 'styled-components';
import { motion, useAnimation } from 'framer-motion';

/**
 * DEFAULT EXPORT
 */
export default function Image(props) {
  const {
    alt, src, h, w, lazy, aspect,
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
      opacity: 1,
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
    <Wrap h={h} w={w} aspect={aspect} ref={intersectionRef}>
      <Img
        srcSet={`${src640} 640w, ${src1200} 1200w`}
        sizes="(max-width: 640px) 640px, 1200px"
        loading={lazy && 'lazy'}
        alt={alt}
        initial={{ opacity: 0 }}
        animate={imgControls}
        aspect={aspect}
      />
    </Wrap>
  );
}

/**
 * PROPTYPES
 */
Image.defaultProps = {
  lazy: true, // By default image loads lazily.
  aspect: false, // By default image will not retain aspect ratio.
};

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  h: PropTypes.string.isRequired,
  w: PropTypes.string.isRequired,
  lazy: PropTypes.bool,
  aspect: PropTypes.bool,
};

/**
 * STYLED COMPONENTS
 */
const Wrap = styled.div`
  ${(props) => (props.aspect ? css`
    height: unset !important;
    padding-bottom: calc(${props.h} / ${props.w} * 100%);
    position: relative;
  ` : css`
    height: 100%;
  `)}
`;

const Img = styled(motion.img)`
  ${(props) => (props.aspect ? css`
    left: 0;
    top: 0;
    position: absolute;
    width: 100%;
  ` : css`
    object-fit: cover;
    height: 100%;
    width: 100%;
  `)}
`;
