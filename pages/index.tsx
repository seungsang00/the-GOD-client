import Link from 'next/link';
import Layout from '../components/Layout';
import { Modal } from '../components';

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <h1>component test</h1>
    <div>
      <Modal
        isOpen={true}
        component={<>1</>}
        handler={() => {
          console.log('hi');
        }}
      />
    </div>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
);

export default IndexPage;
