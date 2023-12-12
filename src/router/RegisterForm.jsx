import '../styles/register.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

const RegisterForm = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [number, setNumber] = useState(null);
  const [address, setAddress] = useState(null);
  const [pincode, setPincode] = useState(null);

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

  const NumberErr = () =>
    toast.error(' Enter Valid Phone Number!', {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });

  const PincodeErr = () =>
    toast.error(' Enter a Working Pincode!', {
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
    toast.success('🦄 Register successfully!!!', {
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
    if ((name, email, number, password, address, pincode)) {
      if (number.length === 10) {
        if (pincode.length === 6) {
          success();
          navigate('/');
        } else {
          PincodeErr();
        }
      } else {
        NumberErr();
      }
    } else {
      error();
    }
    setEmail(null);
    setPassword(null);
  };

  return (
    <div className='form-register-outer'>
      <form className='form-register' onSubmit={eventHandler}>
        <h1>Register Form</h1>
        <div>
          <input
            type='text'
            placeholder='Enter Your Name'
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type='email'
            placeholder='Enter Your Valid Email'
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type='number'
            placeholder='Enter Your Number'
            onChange={(e) => setNumber(e.target.value)}
          />
          <input
            type='text'
            placeholder='Enter Your Address'
            onChange={(e) => setAddress(e.target.value)}
          />
          <input
            type='number'
            placeholder='Enter a 6 Digit Pincode'
            onChange={(e) => setPincode(e.target.value)}
          />
        </div>
        <div className='btn-container'>
          <button type='submit' className='btn-submit'>
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
