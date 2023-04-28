import Link from 'next/link';
import { BiLeftArrowAlt } from 'react-icons/bi';
import { useState } from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import {
  getCsrfToken,
  getProviders,
  getSession,
  signIn,
} from 'next-auth/react';

import Header from '../components/header';
import Footer from '../components/footer';
import styles from '../styles/signin.module.scss';
import LoginInput from '../components/inputs/loginInput';
import CircledIconBtn from '../components/buttons/circledIconBtn';
import axios from 'axios';
import { Router } from 'next/router';
import { useRouter } from 'next/navigation';
import DotLoaderSpinner from '../components/loaders/dotLoader';

const initialValues = {
  login_email: '',
  login_password: '',
  success: '',
  error: '',
};

const Signin = ({ providers, csrfToken, callbackUrl }) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(initialValues);
  const { login_email, login_password, success, error } = user;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  //   console.log(user);

  const router = useRouter();

  const loginValidation = Yup.object().shape({
    login_email: Yup.string()
      .email('Please enter a valid email address')
      .required('Email address is required'),
    login_password: Yup.string()
      .required('Please enter a password')
      .min(8, 'Password must be atleast 8 characters')
      .max(32, `Password can't be more than 32 characters`),
  });
  const signInHandler = async () => {
    setLoading(true);
    let options = {
      redirect: false,
      email: login_email,
      password: login_password,
    };
    const res = await signIn('credentials', options);
    setUser({ ...user, success: '', error: '' });

    if (res?.error) {
      setLoading(false);
      setUser({ ...user, error: res?.error });
    } else {
      setLoading(false);

      return router.push(callbackUrl || '/');
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
            <h1>Sign In</h1>
            <p>Get access to the best e-Shopping service in Nigeria</p>
            <Formik
              enableReinitialize
              initialValues={{
                login_email,
                login_password,
              }}
              validationSchema={loginValidation}
              onSubmit={() => {
                signInHandler();
              }}
            >
              {(form) => (
                <Form method="post" action="/api/auth/signin/email">
                  <input
                    type="hidden"
                    name="csrfToken"
                    defaultValue={csrfToken}
                  />
                  <LoginInput
                    type="text"
                    name="login_email"
                    icon="email"
                    placeholder="Email Address"
                    onChange={handleChange}
                  />
                  <LoginInput
                    type="password"
                    name="login_password"
                    icon="password"
                    placeholder="Password"
                    onChange={handleChange}
                  />
                  <div className={styles.button}>
                    <CircledIconBtn type="submit" text="Sign In" />
                    {error && <span className={styles.error}>{error}</span>}
                  </div>
                  <div className={styles.account}>
                    <Link href="/auth/forgot" className={styles.forgot}>
                      Forgot password?
                    </Link>{' '}
                    |
                    <Link href="/signup" className={styles.forgot}>
                      {' '}
                      Sign Up
                    </Link>
                  </div>
                </Form>
              )}
            </Formik>

            <div className={styles.login_socials}>
              <span className={styles.or}>Or continue with</span>
              <div className={styles.login_socials_wrap}>
                {providers.map((provider) => {
                  if (provider.name == 'Credentials') return;
                  return (
                    <div key={provider.name}>
                      <button
                        className={styles.social_btn}
                        onClick={() => signIn(provider.id)}
                      >
                        <img
                          src={`/${provider.name}.png`}
                          alt={`${provider.name}`}
                        />
                        <p>Sign in with {provider.name}</p>
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signin;

export async function getServerSideProps(context) {
  const { req, query } = context;

  const session = await getSession({ req });
  const { callbackUrl } = query;

  if (session) {
    return {
      redirect: {
        destination: `${callbackUrl}`,
        permanent: false,
      },
    };
  }
  const csrfToken = await getCsrfToken(context);

  const providers = Object.values(await getProviders());
  return {
    props: {
      providers,
      csrfToken,
      callbackUrl,
    },
  };
}
