import Link from 'next/link';
import React, { ReactElement } from 'react';
import { FooterContainer } from './Footer.style';
// fake logo
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGrinHearts } from '@fortawesome/free-solid-svg-icons';

const Footer = ({ logo }: any): ReactElement => {
  logo = logo || <FontAwesomeIcon icon={faGrinHearts} />;
  return (
    <FooterContainer>
      <section className="footer-brand-info">
        <h3 className="logo">
          <Link href="/">
            <a>
              {logo && logo} <span className="logo-text">FansSum</span>
            </a>
          </Link>
        </h3>
        <span className="slogan">서비스 소개 슬로건이 들어갑니다</span>
      </section>
      <section>
        <p className="copyright">
          &copy; 2021 Team <span className="author">The G.O.D</span> All Rights
          Reserved
        </p>
      </section>
    </FooterContainer>
  );
};

export default Footer;
