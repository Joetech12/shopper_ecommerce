import Link from 'next/link';
import { BiLeftArrowAlt } from 'react-icons/bi';
import { useState } from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { getProviders, signIn } from 'next-auth/react';

import Header from '../components/header';
import Footer from '../components/footer';
import styles from '../styles/signin.module.scss';
import LoginInput from '../components/inputs/loginInput';
import CircledIconBtn from '../components/buttons/circledIconBtn';

const initialValues = {
  login_email: '',
  login_password: '',
};

const Signup = ({ providers }) => {
  const [user, setUser] = useState(initialValues);
  const { login_email, login_password } = user;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  console.log(user);
  const loginValidation = Yup.object().shape({
    login_email: Yup.string()
      .email('Please enter a valid email address')
      .required('Email address is required'),
    login_password: Yup.string().required('Please enter a password'),
  });

  return (
    <>
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
                login_email,
                login_password,
              }}
              validationSchema={loginValidation}
            >
              {(form) => (
                <Form>
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
                  <CircledIconBtn type="submit" text="Sign Up" />
                  <div className={styles.account}>
                    Have an account? <span onClick={()=>signIn()} className={styles.forgot}>Sign In</span>
                  </div>
                </Form>
              )}
            </Formik>

            <div className={styles.login_socials}>
              <span className={styles.or}>Or continue with</span>
              <div className={styles.login_socials_wrap}>
                {providers.map((provider) => (
                  <div key={provider.name}>
                    <button
                      className={styles.social_btn}
                      onClick={() => signIn(provider.id)}
                    >
                      <img
                        src={`/${provider.name}.png`}
                        alt={`${provider.name}`}
                      />
                      Sign in with {provider.name}
                    </button>
                  </div>
                ))}
              </div>
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
