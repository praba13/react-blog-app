import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [inputs, setInputs] = useState({
    username: '',
    password: ''
  });

  const [err, setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await navigate('/');
    } catch (err) {
      setError(err.response.data);
    }
  };

  console.log(inputs);

  return (
    <div className='auth'>
      <h1>Login</h1>
      <form>
        <input
          type='text'
          placeholder='username'
          required
          name='username'
          onChange={handleChange}
        />
        <input
          type='password'
          placeholder='password'
          required
          name='password'
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Login</button>
        {err && <p>{err}</p>}
        <span>
          Don't you have an Account? <Link to='/register'>Register</Link>{' '}
        </span>
      </form>
    </div>
  );
};

export default Login;
