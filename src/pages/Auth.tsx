import React, { useState } from 'react';
import { useForm, useFirebaseAuth } from '../hooks';

const Auth: React.FC = () => {
  const [formValues, handleFormChange] = useForm({ email: '', password: '', passwordConfirm: '' });
  const [currentUser, handleSignin, handleLogin] = useFirebaseAuth();
  const [isRegister, setIsRegister] = useState(false);

  const handleEmailLoginClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = formValues;
    if (currentUser) {
      handleLogin(email, password);
    } else {
      handleSignin(email, password);
    }
  };

  const handleGoogleLoginClick = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  const handleGithubLoginClick = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleEmailLoginClick}>
        <input
          type="email"
          name="email"
          placeholder="enter your email"
          value={formValues.email}
          onChange={handleFormChange}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={formValues.password}
          onChange={handleFormChange}
        />
        {isRegister && (
          <input
            type="password"
            name="passwordConfirm"
            placeholder="passwordConfirm"
            value={formValues.passwordConfirm}
            onChange={handleFormChange}
          />
        )}
        <input type="submit" value={isRegister ? 'SignIn' : 'LogIn'} />
      </form>
      <button name="register" onClick={() => setIsRegister(!isRegister)}>
        register
      </button>
      <div>
        <button onClick={handleGoogleLoginClick}>with Google</button>
        <button onClick={handleGithubLoginClick}>with Github</button>
      </div>
    </>
  );
};

export default Auth;
