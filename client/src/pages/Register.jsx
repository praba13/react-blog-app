import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
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
      await navigate('/login');
    } catch (err) {
      setError(err.response.data);
    }
  };

  console.log(inputs);

  return (
    <div className='auth'>
      <h1>Register</h1>
      <form>
        <input
          type='text'
          placeholder='username'
          required
          name='username'
          onChange={handleChange}
        />
        <input
          type='email'
          placeholder='email'
          required
          name='email'
          onChange={handleChange}
        />
        <input
          type='password'
          placeholder='password'
          required
          name='password'
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Register</button>
        {err && <p>{err}</p>}
        <span>
          Do you have an Account? <Link to='/login'>Login</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
