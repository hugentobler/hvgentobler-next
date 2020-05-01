// components/Image.js
// Turn images into lazy loaded iamges.

// Modules
import React from 'react';
import { useIntersection } from 'react-use';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Image = props => {
  // Intersection observer for Image.
  const intersectionRef = React.useRef(null);
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 1
  });

  // Get children props.
  let p = props,
    src = p.src,
    h = p.height,
    w = p.width,
    alt = p.alt,
    loading = p.loading;

  // Declare responsive sources.
  let pathAndName = src.substring(0, src.lastIndexOf('.')),
    fileExtension = src.substring(src.lastIndexOf('.')),
    src1200 = pathAndName + '-1200' + fileExtension,
    src640 = pathAndName + '-640' + fileExtension;

  return (
    // Wrap uses intrinsic aspect ratio to prevent page jittering when image loads.
    <Wrap h={h} w={w}>
      <Img
        srcSet={`${src640} 640w, ${src1200} 1200w`}
        sizes='(max-width: 640px) 640px, 1200px'
        loading={loading && 'lazy'}
        alt={alt}
        ref={intersectionRef}
        initial='initial'
        animate={intersection && intersection.intersectionRatio < 1 ? 'Visible' : ''}
        variants={imgVariants}
      />
      {intersection && intersection.intersectionRatio < 1 ?
        console.log('visible') : console.log('hidden')}
    </Wrap>
  );
};

// Styled components
const Wrap = styled.div`
  padding-bottom: ${props => `calc(${props.h} / ${props.w} * 100%)`};
  position: relative;
`;

const Img = styled(motion.img)`
  height: 100%;
  left: 0;
  top: 0;
  position: absolute;
  width: 100%;
`;

// Animations
const imgVariants = {
  initial: {
    scale: .5,
    opacity: 0
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: .4
    }
  },
};

export default Image;
