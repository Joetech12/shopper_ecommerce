import Link from 'next/link';
import { BiLeftArrowAlt } from 'react-icons/bi';
import { useState } from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { getProviders, signIn } from 'next-auth/react';
import Router from 'next/router';

import Header from '../components/header';
import Footer from '../components/footer';
import styles from '../styles/signin.module.scss';
import LoginInput from '../components/inputs/loginInput';
import CircledIconBtn from '../components/buttons/circledIconBtn';
import axios from 'axios';
import DotLoaderSpinner from '../components/loaders/dotLoader';

const initialValues = {
  name: '',
  email: '',
  password: '',
  confirm_password: '',
  success: '',
  error: '',
};

const Signup = ({ providers }) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(initialValues);
  const { name, email, password, confirm_password, success, error } = user;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  //   console.log(user);
  const signupValidation = Yup.object().shape({
    name: Yup.string()
      .required('Please enter your full name')
      .min(4, 'Name must be atleast 4 characters')
      .max(32, `'Name can't be more than 32 characters'`)
      .matches(/^[aA-zZ]/, 'Numbers and special characters are not allowed'),
    email: Yup.string()
      .email('Please enter a valid email address')
      .required('Email address is required'),
    password: Yup.string()
      .required('Please enter a password')
      .min(8, 'Password must be atleast 8 characters')
      .max(32, `Password can't be more than 32 characters`),
    confirm_password: Yup.string()
      .required('Please confirm your password')
      .oneOf([Yup.ref('password')], `Password doesn't match`),
  });

  const signUpHandler = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post('/api/auth/signup', {
        name,
        email,
        password,
      });
      setUser({ ...user, error: '', success: data.message });
      setLoading(false);
      setTimeout(() => {
        Router.push('/');
      }, 2000);
    } catch (error) {
      setLoading(false);
      setUser({ ...user, success: '', error: error.response.data.message });
    }
  };

  return (
    <>
      {loading && <DotLoaderSpinner loading={loading} />}
      <Header />
      <div className={styles.login}>
        <div className={styles.login_container}>
          <div className={styles.login_header}>
            <div className={styles.back_svg}>
              <BiLeftArrowAlt />
            </div>
            <span>
              We'll be happy if you join us! <Link href="/">Go to store</Link>
            </span>
          </div>
          <div className={styles.login_form}>
            <h1>Sign Up</h1>
            <p>Get access to the best e-Shopping service in Nigeria</p>
            <Formik
              enableReinitialize
              initialValues={{
                name,
                email,
                password,
                confirm_password,
              }}
              validationSchema={signupValidation}
              onSubmit={() => {
                signUpHandler();
              }}
            >
              {(form) => (
                <Form>
                  <LoginInput
                    type="text"
                    name="name"
                    icon="user"
                    placeholder="Full Name"
                    onChange={handleChange}
                  />
                  <LoginInput
                    type="text"
                    name="email"
                    icon="email"
                    placeholder="Email Address"
                    onChange={handleChange}
                  />
                  <LoginInput
                    type="password"
                    name="password"
                    icon="password"
                    placeholder="Password"
                    onChange={handleChange}
                  />
                  <LoginInput
                    type="password"
                    name="confirm_password"
                    icon="password"
                    placeholder="Confirm Password"
                    onChange={handleChange}
                  />
                  <div className={styles.button}>
                    <CircledIconBtn type="submit" text="Sign Up" />
                  </div>
                  <div className={styles.account}>
                    Have an account?{' '}
                    <span onClick={() => signIn()} className={styles.forgot}>
                      Sign In
                    </span>
                  </div>
                </Form>
              )}
            </Formik>
            <div>{error && <span className={styles.error}>{error}</span>}</div>
            <div>
              {success && <span className={styles.success}>{success}</span>}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signup;

export async function getServerSideProps(context) {
  const providers = Object.values(await getProviders());
  return {
    props: {
      providers,
    },
  };
}
