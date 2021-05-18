import Link from 'next/link';
import Layout from '../components/Layout';
import { Modal } from '../components';
import useModal from 'hooks/useModal';

const IndexPage = () => {
  const { isOpen, modalController } = useModal();
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
      <h1>component test</h1>
      <div>
        <label htmlFor="modal">modal button</label>
        <button style={{ border: 'solid 1px red' }} onClick={modalController}>
          modal active button
        </button>
        <Modal
          isOpen={isOpen}
          component={<>테스트용 컴포넌트</>}
          handler={modalController}
        />
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
