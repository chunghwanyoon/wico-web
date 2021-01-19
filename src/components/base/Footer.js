import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  min-height: 3.75rem;

  div.footer-copyright {
    color: gray;
    font-size: 0.75rem;
    padding: 0.25rem;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <div className="footer-copyright">© fana All Right Reserved.</div>
    </FooterContainer>
  );
};

export default Footer;
