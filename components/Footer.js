// components/Footer.js

// Modules
import styled from 'styled-components';

const Footer = () => (
  <Root>
    <Container>
      <section>

      </section>
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
`;

const Container = styled.div`
  max-width: var(--max-width);
  padding: 100px;
  width: 100%;
`;
