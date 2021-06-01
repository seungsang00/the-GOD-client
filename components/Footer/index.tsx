import useScrollFadeIn from 'hooks/useScrollFadeIn';
import Link from 'next/link';
import React, { ReactElement } from 'react';
import { FooterContainer, FooterSection, FooterWrapper } from './Footer.style';

const Footer = ({ logo }: any): ReactElement => {
  const animatedItem = {
    0: useScrollFadeIn('up', 1, 0),
    1: useScrollFadeIn('up', 1, 0.2),
    2: useScrollFadeIn('up', 1, 0.3),
    3: useScrollFadeIn('up', 1, 0.4),
    4: useScrollFadeIn('up', 1, 0.5),
  };

  return (
    <FooterWrapper {...animatedItem[0]}>
      <FooterContainer>
        <section className="footer-brand-info" {...animatedItem[1]}>
          <h3 className="logo">
            <Link href="/">
              <a>
                {logo && logo} <span className="logo-text">FansSum</span>
              </a>
            </Link>
          </h3>
          <span className="slogan">팬심이 모여 문화가 되다</span>
        </section>
        <FooterSection className="main-footer-section" {...animatedItem[3]}>
          <h6>ABOUT US</h6>
          <ul>
            <li>FansSum Wiki</li>
            <li>Client Repo</li>
            <li>Server Repo</li>
          </ul>
        </FooterSection>
        <FooterSection className="main-footer-section" {...animatedItem[2]}>
          <h6>CONTACT</h6>
          <ul>
            <li>
              <a>Eonjo Sim</a>
            </li>
            <li>
              <a>Jaewon Choi</a>
            </li>
            <li>
              <a>Seungyeon Yoo</a>
            </li>
            <li>
              <a>Yoontaek Lee</a>
            </li>
          </ul>
        </FooterSection>
      </FooterContainer>
      <section className="copyright">
        <p className="copyright">
          &copy; 2021 Team <span className="author">The G.O.D</span> All Rights
          Reserved
        </p>
      </section>
    </FooterWrapper>
  );
};

export default Footer;
