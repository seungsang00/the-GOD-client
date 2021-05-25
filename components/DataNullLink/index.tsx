import { Button } from '@components';
import { useRouter } from 'next/dist/client/router';
import React from 'react';
import { Wrapper } from './DataNullLink.style';

interface DataNullLinkProps {
  title: string;
  description: string;
  buttonText: string;
  linkTo: string;
}

const DataNullLink = ({
  title,
  description,
  buttonText,
  linkTo,
}: DataNullLinkProps) => {
  const router = useRouter();
  const handler = () => {
    router.push(linkTo);
  };
  return (
    <Wrapper>
      <h4>{title}</h4>
      <p>{description}</p>
      <Button disabled={false} text={buttonText} handler={handler} />
    </Wrapper>
  );
};

export default DataNullLink;
