import React, { useState } from 'react';

const Auth: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleGoogleClick = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  const handleGithubClick = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="enter your email" value={email} onChange={handleChange} />
        <input type="password" name="password" placeholder="password" value={password} onChange={handleChange} />
        <input type="submit" value="Log in" />
      </form>
      <button onClick={handleGoogleClick}>with Google</button>
      <button onClick={handleGithubClick}>with Github</button>
    </>
  );
};

export default Auth;
