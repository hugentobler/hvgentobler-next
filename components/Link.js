/**
 * LINK
 * components/Link.js
 * Wrapped Next Link with my own logic.
 * Link hover Motion animation.
 * Active classname on active pages.
 * {@link https://nextjs.org/docs/api-reference/next/link}
 */

/**
 * MODULES
 */
import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { motion } from 'framer-motion';

/**
 * DEFAULT EXPORT
 */
export default function MyLink(props) {
  const { children, href } = props;
  const router = useRouter();

  /* Append active classname if this page is active. */
  let className = children.props.className || '';
  if (router.pathname === href) {
    className = `${className} active`;
  }

  return (
    <motion.div
      whileHover={{ translateY: '-1px' }}
    >
      <Link href={href}>
        {React.cloneElement(children, { className })}
      </Link>
    </motion.div>
  );
}

/**
 * PROPTYPES
 */
MyLink.propTypes = {
  children: PropTypes.element.isRequired,
  href: PropTypes.string.isRequired,
};
