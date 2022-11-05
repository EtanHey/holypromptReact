/* global google */
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { GoogleLogin, CredentialResponse } from '@react-oauth/google';
import { useAppDispatch } from '../../app/hooks';
import { getGoogleUserThunk } from '../../features/users/usersAPI';
import HolyLogoRed from '../../../assets/SVGs/HolyLogoRed';
import useWindowDimensions from '../../app/useWindowDimentions';
import LoginForm from '../components/LoginForm';

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { width } = useWindowDimensions();
  const loginPageRef = useRef<HTMLDivElement>(null);

  const handleGoogleLogin = async (credentialResponse: CredentialResponse) => {
    const { credential } = credentialResponse;
    if (!credential) throw new Error('no credential');
    const { payload } = await dispatch(getGoogleUserThunk(credential));
    if (!payload) return google.accounts.id.prompt();
    return navigate('/editor');
  };
  return (
    <div ref={loginPageRef} className="login page">
      <div className="login">
        <HolyLogoRed screenWidth={width} />
        <h3 className="login__header">Login to HolyPrompt</h3>
        <LoginForm />
        <p>
          Don’t have an account yet?
          <a href="https://www.holyprompt.com/"> Sign Up </a>now!
        </p>
        <p>or</p>
        <GoogleLogin
          // locale="he"
          text="continue_with"
          type="standard"
          shape="pill"
          login_uri="http://localhost:1212"
          ux_mode="redirect"
          useOneTap
          onSuccess={handleGoogleLogin}
          onError={() => {
            console.log('Login Failed');
          }}
        />
      </div>
    </div>
  );
};

export default Login;
