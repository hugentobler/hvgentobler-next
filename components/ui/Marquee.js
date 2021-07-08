/**
 * MARQUEE
 * components/Marquee.js
 */

/**
 * MODULES
 */
import styled, { keyframes } from 'styled-components';

/**
 * DEFAULT EXPORT
 */
const updates = [
  ["Jul 4: Staying in Mui Wo 🇭🇰 near the beach 🏄", 'Stay in touch ⤴'],
  ["Nov 1: I'm back in Taipei based at WeWork", 'Stay in touch ⤴'],
  ["Oct 1: I'm currently surfing round Taiwan living in my van", 'Stay in touch ⤴'],
];

export default function Marquee() {
  return (
    <Wrap>
      <a href="https://eepurl.com/hePebj" target="_blank">
        <Inner ariaHidden>
          {[...Array(4)].map((e) => (
            updates[0].map((e) => <p key={e}>{e}</p>)
          ))}
        </Inner>
      </a>
    </Wrap>
  );
}

/**
 * STYLED COMPONENTS
 */
const offset = '20vw';
const moveInitial = `calc(-25% + ${offset})`;
const moveFinal = `calc(-50% + ${offset})`;

const Wrap = styled.div`
  background-color: var(--old-makeup-pink);
  color: var(--classic-blue);
  overflow: hidden;
`;

const marquee = keyframes`
  from {
    transform: translateX(${moveInitial});
  }
  to {
    transform: translateX(${moveFinal});
  }
`;

const Inner = styled.div`
  width: max-content;
  display: flex;
  position: relative;
  transform: translateX(${moveInitial});
  animation: ${marquee} 6s linear infinite;
  padding: var(--space-1) 0;
  p {
    margin: 0;
    margin-right: 5vw;
  }
`;
