import { GoogleLoginButton } from '@components';
import { googleAuthThunk } from 'modules/auth';
import React from 'react';
import {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from 'react-google-login';
import { useDispatch } from 'react-redux';
const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string;

const GoogleLoader = () => {
  const dispatch = useDispatch();
  return (
    <GoogleLoginButton
      clientId={GOOGLE_CLIENT_ID}
      onSubmit={(res: GoogleLoginResponse | GoogleLoginResponseOffline) => {
        console.log(res);
        if ('tokenId' in res) {
          dispatch(googleAuthThunk(res.tokenId));
        }
      }}
    />
  );
};

export default GoogleLoader;
