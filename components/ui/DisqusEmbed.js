/**
 * DisqusEmbed
 * components/DisqusEmbed.js
 */

/**
 * MODULES
 */
import { DiscussionEmbed } from 'disqus-react';
import { useRouter } from 'next/router';

/**
 * DEFAULT EXPORT
 */
export default function DisqusEmbed(props) {
  const router = useRouter();
  const {title} = props;
  return (
    <DiscussionEmbed
      shortname="hvgentobler"
      config={
        {
          url: router.pathname,
          identifier: router.pathname,
          title,
        }
      }
    />
  );
}
