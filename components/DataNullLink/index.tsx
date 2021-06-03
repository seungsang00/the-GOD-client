import { Button } from '@components';
import { DataNullLinkProps } from '@interfaces';
import { useRouter } from 'next/dist/client/router';
import React from 'react';
import { Wrapper } from './DataNullLink.style';

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
      <Button
        disabled={false}
        type="line"
        text={buttonText}
        handler={handler}
      />
    </Wrapper>
  );
};

export default DataNullLink;
