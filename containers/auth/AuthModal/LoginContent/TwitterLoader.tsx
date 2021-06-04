import { TwitterLoginButton } from '@components';
import { twitterAuthThunk } from 'modules/auth';
import TwitterLogin from 'react-twitter-login';
import React from 'react';
import { useDispatch } from 'react-redux';

const TwitterLoader = () => {
  const dispatch = useDispatch();
  const twitterHandler = (err: any, data: any) => {
    dispatch(twitterAuthThunk(err, data));
  };
  return (
    <TwitterLogin
      authCallback={twitterHandler}
      consumerKey={process.env.NEXT_PUBLIC_TWITTER_KEY as string}
      consumerSecret={process.env.NEXT_PUBLIC_TWITTER_SECRET_KEY as string}
    >
      <TwitterLoginButton onClick={() => {}} />
    </TwitterLogin>
  );
};
export default TwitterLoader;
