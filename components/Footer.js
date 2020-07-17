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
export default () => (
  <Root>
    <Container>
      <Inner>
        <Social>
          <a href="https://github.com/hugentobler/hvgentobler-next" target="_blank" rel="noreferrer">source</a>
          <Insta href="https://instagram.com/globehunter" target="_blank" rel="noreferrer">instagram</Insta>
          <a href="https://linkedin.com/in/hugentobler/" target="_blank" rel="noreferrer">linkedin</a>
        </Social>
        <p>
          Typeset in&nbsp;
          <a href="https://klim.co.nz/collections/soehne/" target="_blank" rel="noreferrer">Söhne</a>
          .
        </p>
        <p>
          Built with&nbsp;
          <a href="https://nextjs.org/" target="_blank" rel="noreferrer">Next</a>
          &nbsp;and served with&nbsp;
          <a href="https://zeit.co/" target="_blank" rel="noreferrer">ZEIT Now</a>
          .
        </p>
        <p>
          © Christopher Hugentobler 2020. This work is licensed under a
          {' '}
          <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>
          .
        </p>
      </Inner>
    </Container>
  </Root>
);

/**
* STYLED COMPONENTS
*/
const Root = styled.footer`
  background-color: var(--sand);
  bottom: 0;
  left: 0;
  position: sticky;
  z-index: 0;
`;

const Container = styled.div`
  margin: 0 auto;
  max-width: var(--max-width);
  padding: var(--space-6) 0;
  width: 100%;
`;

const Inner = styled.div`
  color: lightgray;
  display: flex;
  flex-direction: column;
  padding: var(--space-6) var(--space-2);
  p {
    transition: all 120ms ease-in-out;
    &:hover {
      color: gray;
    }
  }
`;

const Social = styled.div`
  display: flex;
  margin-bottom: var(--space-4);
  a {
    border: none;
    color: gray;
    margin-right: var(--space-3);
    font-size: 0.7em;
    font-weight: 400;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    &:hover {
      color: darkgray;
    }
  }
`;

const Insta = styled.a`
  // background: linear-gradient(to right, #F58529, #FEDA77, #DD2A7B, #8134AF, #515BD4);
  //-webkit-background-clip: text;
  //-webkit-text-fill-color: transparent;
`;
