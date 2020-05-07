// components/Link.js
// Custom link component wrapping next/link

// Modules
import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default ({ href, toggleMenu, children }) => {
  const router = useRouter();

  // Append class if this is active page.
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
        {/*React.cloneElement(children, { className, onClick })*/}
      </Link>
    </motion.div>
  );
};
