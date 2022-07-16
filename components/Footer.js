/**
 * FOOTER
 * components/Footer.js
 */

/**
* MODULES
*/
import styled from 'styled-components';

/**
 * DEFAULT EXPORT
 */
export default function Footer() {
  return (
    <Root>
      <Grid>
        <Heading>
          This is the new world. And in this world, you can be whoever the f*ck you want. - M.M.
        </Heading>
        <Links>
          {/* <Link
            href="/contact"
            scroll={false}
            >
            <a>Contact Us</a>
          </Link> */}
          <a href="mailto:hugentobler@proton.me" target="_blank" rel="noreferrer">Say Hey!</a>
          <a href="https://linkedin.com/in/hugentobler/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://instagram.com/globehunter" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://github.com/hugentobler/hvgentobler-next" target="_blank" rel="noreferrer">Site Source</a>
        </Links>
        <p>Christopher Hugentobler</p>
        <p>Walking talking venn diagram</p>
        <p>
          No cookies, built w/&nbsp;
          <a href="https://nextjs.org/" target="_blank" rel="noreferrer">Next.js</a>
          , served w/&nbsp;
          <a href="https://zeit.co/" target="_blank" rel="noreferrer">ZEIT</a>
        </p>
        <p>
          © 2020 Licensed under&nbsp;
          <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>
        </p>
      </Grid>
    </Root>
  );
}

/**
* STYLED COMPONENTS
*/
const Root = styled.footer`
  background-color: var(--sand);
  bottom: 0;
  left: 0;
  padding: var(--space-2) var(--space-2);
  position: sticky;
  z-index: 0;
`;

const Grid = styled.div`
  color: var(--dark-gray);
  display: grid;
  gap: var(--space-1) var(--space-1);
  grid-template-columns: repeat(13, 1fr);
  grid-template-rows: min-content min-content;
  p {
    font-size: 1.2rem;
    font-weight: 300;
    grid-column: 1 / 13;
    line-height: 1.3;
    margin: 0;
    &:nth-of-type(1) {
      grid-row: 3 / span 1;
    }
    @media ${(props) => props.theme.forNotSmall} {
      font-size: 1vw;
      grid-row: 3 / span 1;
      &:nth-of-type(1) {
        grid-column: 1 / span 3;
      }
      &:nth-of-type(2) {
        grid-column: 4 / span 3;
      }
      &:nth-of-type(3) {
        grid-column: 7 / span 3;
      }
      &:nth-of-type(4) {
        grid-column: 10 / span 3;
      }
    }
  }
  em {
    color: var(--black);
    font-style: normal;
  }
  a {
    border: none;
    color: var(--black);
    font-size: 1.2rem;
    font-weight: 300;
    line-height: 1.3;
    margin-bottom: var(--space-1);
    @media ${(props) => props.theme.forNotSmall} {
      font-size: 1vw;
    }
  }
`;

const Heading = styled.h1`
  grid-column-end: span 13;
  margin-top: calc(var(--space-6) * 3);
  @media ${(props) => props.theme.forNotSmall} {
    grid-column-end: span 8;
  }
`;

const Links = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  grid-column: 7 / 14;
  grid-row: 2 / 2;
  margin-bottom: calc(var(--space-6) * 3);
  @media ${(props) => props.theme.forNotSmall} {
    grid-column: 10 / span 3;
  }
`;
