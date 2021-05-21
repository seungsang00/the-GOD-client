import { useState } from 'react';
import Link from 'next/link';
import {
  Modal,
  Toggle,
  Button,
  Layout,
  GuideButton,
  Footer,
} from '@components';
import useModal from 'hooks/useModal';
import Carousel from 'components/Carousel';
import { LoginContent, SignupContent } from 'containers/auth';

const IndexPage = () => {
  const { isOpen, modalController } = useModal();
  const [toggleValue, setToggleValue] = useState<boolean>(false);
  const [guideActive, setGuideActive] = useState<boolean>(false);
  return (
    <Layout title="FansSum | 팬심이 모여 문화가 되다" footer={<Footer />}>
      <section>
        <nav>
          <Link href="/main">
            <a>Main</a>
          </Link>{' '}
          |{' '}
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
      </section>

      <h1>Hello Next.js 👋</h1>
      <h1>component test</h1>
      <div style={{ width: '100%', padding: '40px' }}>
        <label htmlFor="modal">login modal button</label>
        <button style={{ border: 'solid 1px red' }} onClick={modalController}>
          modal active button : login + signup
        </button>
        <Modal
          isOpen={isOpen}
          component={
            <>
              <LoginContent />
              <br />
              <br />
              <SignupContent />
            </>
          }
          handler={modalController}
        />
      </div>

      <div style={{ width: '100%', padding: '40px' }}>
        <h1>toggle button</h1>
        <Toggle
          value={toggleValue}
          icon="parking"
          handler={() => {
            setToggleValue(!toggleValue);
          }}
        />
      </div>
      <div style={{ width: '100%', padding: '40px' }}>
        <h1>Button</h1>
        <Button disabled={false} text="버튼" handler={() => {}} />
      </div>
      <div style={{ width: '100%', padding: '40px' }}>
        <h1>Button</h1>
        <GuideButton
          active={guideActive}
          activeHandler={() => {
            setGuideActive(!guideActive);
          }}
          shareHandler={() => {}}
          resetHandler={() => {}}
        />
      </div>
      <div style={{ width: '100%', padding: '40px' }}>
        <h1>carousel</h1>
        <Carousel>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
        </Carousel>
      </div>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </Layout>
  );
};

export default IndexPage;
