import '../styles/login.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

const LogIn = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const navigate = useNavigate();

  const error = () =>
    toast.error(' Input Field Is Mandatory!', {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });

  const success = () =>
    toast.success('🦄 Login successfully!!!', {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    });

  const eventHandler = (e) => {
    e.preventDefault();
    if ((email, password)) {
      success();
      navigate('/');
    } else {
      error();
    }
    setEmail(null);
    setPassword(null);
  };

  return (
    <div className='form-outer' onSubmit={eventHandler}>
      <form className='form'>
        <h1>Login Form</h1>
        <div>
          <input
            type='email'
            placeholder='Enter Your Valid Email'
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type='password'
            placeholder='Enter Your PassWord'
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className='btn-container'>
          <button type='submit' className='btn-submit'>
            Submit
          </button>
          <Link to='/registerForm' className='btn-taken'>
            Already you have account
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
