import React, { useState } from 'react';
import axiosInstance from '../../../axios';
import './login.css';
import Eye from '../../../assets/Icons/eye.svg';
import Eye_Slash from '../../../assets/Icons/eye-slash.svg';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [success, setSuccess] = useState('');
  const [loading, setIsLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await axiosInstance.post('users/login/', {
        email: formData.email,
        password: formData.password,
      });

      const authToken = response.data.data;

      if (authToken) {
        setSuccess('Login successful!');
        navigate('/')
      } else {
        setError('Invalid response received.');
      }
    } catch (error) {
      setError('Login failed. Please check your credentials.');
      console.error('Login failed', error);
    } finally {
      setSubmitting(false);
      setIsLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const togglePasswordVisibility = () => {
    setIsPasswordShown(!isPasswordShown);
  };

  return (
    <div className='login-container'>
      <p className='logo'>Makao</p>
      <form onSubmit={handleLogin} className='login-form'>
      <h6 className='login-title'>Login</h6>
        <input
          name='email'
          type='email'
          placeholder='Email'
          value={formData.email}
          onChange={handleInputChange}
          className='input-field'
        />
        <div className='password-field'>
          <input
            name='password'
            type={isPasswordShown ? 'text' : 'password'}
            placeholder='Password'
            value={formData.password}
            onChange={handleInputChange}
            className='input-field'
          />
          <span
            className='toggle-password'
            onClick={togglePasswordVisibility}
          >
            <img src={isPasswordShown ? Eye_Slash : Eye} alt='show' />
          </span>
        </div>
        <button type='submit' className='submit-btn' disabled={submitting}>
          {submitting ? 'Logging you in...' : 'Login'}
        </button>
        <p className='disclaimer'>Don't have an account?<a href='/signup'>SignUp</a></p>
      </form>
      {error && <p className='error-msg'>{error}</p>}
      {success && <p className='success-msg'>{success}</p>}
    </div>
  );
}

export default LoginForm;
