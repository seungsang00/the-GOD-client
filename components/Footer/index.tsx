import { LogoIcon } from 'components/Logo';
import useScrollFadeIn from 'hooks/useScrollFadeIn';
import Link from 'next/link';
import React, { ReactElement } from 'react';
import { FooterContainer, FooterSection, FooterWrapper } from './Footer.style';

const Footer = (): ReactElement => {
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
                <LogoIcon size={4} />
                <div>
                  <span className="logo-text">FansSum</span>
                  <span className="slogan">팬심이 모여 문화가 되다</span>
                </div>
              </a>
            </Link>
          </h3>
        </section>
        <FooterSection className="main-footer-section" {...animatedItem[3]}>
          <h6>ABOUT US</h6>
          <ul>
            <li>
              <a href="https://github.com/codestates/the-GOD-client/wiki">
                FansSum Wiki
              </a>
            </li>
            <li>
              <a href="https://github.com/codestates/the-GOD-client">
                Client Repo
              </a>
            </li>
            <li>
              <a href="https://github.com/codestates/the-GOD-server">
                Server Repo
              </a>
            </li>
          </ul>
        </FooterSection>
        <FooterSection className="main-footer-section" {...animatedItem[2]}>
          <h6>CONTACT</h6>
          <ul>
            <li>
              <a href="">Eonjo Sim</a>
            </li>
            <li>
              <a href="">Jaewon Choi</a>
            </li>
            <li>
              <a href="">Seungyeon Yoo</a>
            </li>
            <li>
              <a href="">Yoontaek Lee</a>
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
