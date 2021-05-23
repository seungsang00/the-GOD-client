import React, { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { Avatar, Header } from '@components';
import { CommonLayoutStyle } from './layouts.style';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <CommonLayoutStyle>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header
      avatar={
        <Avatar
          profileImage="https://d1u5g7tm7q0gio.cloudfront.net/images/avatars/defaults/default.jpg"
          size={2}
        />
      }
    />
    <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{' '}
        |{' '}
        <Link href="/about">
          <a>About</a>
        </Link>{' '}
        |{' '}
        <Link href="/users">
          <a>Users List</a>
        </Link>{' '}
        | <a href="/api/users">Users API</a>
      </nav>
    </header>
    <section id="mainContent">{children}</section>
    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
  </CommonLayoutStyle>
);

export default Layout;
