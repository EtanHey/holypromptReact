/* eslint-disable jsx-a11y/anchor-is-valid */
import { BaseSyntheticEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginEmailApproved from '../../../assets/SVGs/LoginEmailApproved';
import LoginEmail from '../../../assets/SVGs/LoginEmail';
import LoginEye from '../../../assets/SVGs/LoginEye';
import LoginEyeSlash from '../../../assets/SVGs/LoginEyeSlash';
import { useAppDispatch } from '../../app/hooks';
import { getUsersInfoThunk } from '../../features/users/usersAPI';

const LoginForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState<boolean>();

  const handlePasswordState = () => {
    setShowPassword((state) => {
      return !state;
    });
  };
  const emailValid = (val: string) => {
    setIsEmailValid(
      /^[a-z0-9][a-z0-9-_.]+@([a-z]|[a-z0-9]?[a-z0-9-]+[a-z0-9])\.[a-z0-9]{2,10}(?:\.[a-z]{2,10})?$/.test(
        val
      )
    );
  };
  const handleManualLogin = async (ev: BaseSyntheticEvent) => {
    ev.preventDefault();
    let { email, password } = ev.target.elements;
    email = email.value;
    password = password.value;
    const { payload } = await dispatch(getUsersInfoThunk({ email, password }));
    if (payload) {
      navigate('/home');
    }
  };
  return (
    <form
      onSubmit={(ev) => {
        handleManualLogin(ev);
      }}
      className="login__form"
    >
      <div className="login__inputs">
        <input
          onChange={(e: any) => {
            emailValid(e.target.value);
          }}
          type="email"
          name="email"
          id="email"
          required
        />
        {isEmailValid ? <LoginEmailApproved /> : <LoginEmail />}
      </div>
      <div className="login__inputs">
        <input
          type={showPassword ? 'text' : 'password'}
          name="password"
          id="password"
          required
        />
        <button className="login__eye" onMouseUp={handlePasswordState}>
          {showPassword ? <LoginEye /> : <LoginEyeSlash />}
        </button>
      </div>
      <a>forgot password?</a>
      <button className="loginButton" type="submit">
        LOGIN
      </button>
    </form>
  );
};

export default LoginForm;
