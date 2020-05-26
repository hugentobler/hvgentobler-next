// components/Footer.js

// Modules
import styled from 'styled-components';

const Footer = () => (
  <Root>
    <Container>
      <Inner>
        <Social>
          <a href='https://github.com/hugentobler/hvgentobler-next' target='_blank'><span>Source</span></a>
          <Insta href='https://instagram.com/globehunter' target='_blank'><span>instagram</span></Insta>
          <a href='https://linkedin.com/in/hugentobler/' target='_blank'><span>linkedin</span></a>
        </Social>
        <p>Typeset in <a href='https://klim.co.nz/collections/soehne/' target='_blank'>Söhne</a>.</p>
        <p>Built with <a href='https://nextjs.org/' target='_blank'>Next</a> and served with <a href='https://zeit.co/' target='_blank'>ZEIT Now</a>.</p>
        <p>© Christopher Hugentobler 2020</p>
      </Inner>
    </Container>
  </Root>
);

export default Footer;

// Styled components
const Root = styled.footer`
  background-color: #f9f8f1;
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
  padding: var(--space-6) var(--space-1);
  p {
    transition: all 120ms ease-in-out;
    &:hover {
      color: gray;
    }
  }
`;

const Social = styled.div`
  margin-bottom: var(--space-4);
  a {
    border: none;
    color: gray;
    margin-right: var(--space-3);
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
