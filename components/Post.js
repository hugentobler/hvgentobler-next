/**
 * POST
 * components/Post.js
 * Format post content.
 */

/**
 * MODULES
 */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * DEFAULT EXPORT
 */
export default function Post(props) {
  const { children } = props;
  useEffect(() => {
  });

  const wraps = {};
  children.forEach((e, i) => {
    if (e.type === 'wrap') wraps[i] = e;
  });
  //const wrapsPos = Array.
  Object.entries(wraps).forEach((e) => {
    children[e[0]] = <Wrap>{e[1]}</Wrap>;
  });

  console.log(wraps);


  return (
    <section>
      {children}
    </section>
  );
}

/**
 * PROPTYPES
 */
Post.propTypes = {
  children: PropTypes.node.isRequired,
};

/**
 * STYLED COMPONENTS
 */
const Wrap = styled.div`
  display: grid;
`;
