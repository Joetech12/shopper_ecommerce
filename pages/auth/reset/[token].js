import { useState } from 'react';
import { BiLeftArrowAlt } from 'react-icons/bi';
import Link from 'next/link';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import axios from 'axios';
import jwt from 'jsonwebtoken';
import { getSession, signIn } from 'next-auth/react';

import styles from '../../../styles/forgot.module.scss';
import Header from '../../../components/header';
import Footer from '../../../components/footer';
import CircledIconBtn from '../../../components/buttons/circledIconBtn';
import LoginInput from '../../../components/inputs/loginInput';
import DotLoaderSpinner from '../../../components/loaders/dotLoader';
import { Router } from 'next/router';

const Reset = ({ user_id }) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const paswordValidation = Yup.object({
    password: Yup.string()
      .required('Please enter your new password')
      .min(8, 'Password must be atleast 8 characters')
      .max(32, `Password can't be more than 32 characters`),
    confirmPassword: Yup.string()
      .required('Please confirm your password')
      .oneOf([Yup.ref('password')], `Password doesn't match`),
  });

  const resetHandler = async () => {
    try {
      setLoading(true);
      const { data } = await axios.put('/api/auth/reset', {
        user_id,
        password,
      });
      let options = {
        redirect: false,
        email: data.email,
        password: password,
      };
      await signIn('credentials', options);
      window.location.reload(true);
    } catch (error) {
      setLoading(false);
      setSuccess('');
      setError(error.response.data.message);
    }
  };

  return (
    <>
      {loading && <DotLoaderSpinner loading={loading} />}

      <Header />
      <div className={styles.forgot}>
        <div className={styles.forgot_header}>
          <div className={styles.back_svg}>
            <BiLeftArrowAlt />
          </div>
          <span>
            Reset your password! <Link href="/">Login Instead</Link>
          </span>
        </div>
        <div className={styles.forgot_form}>
          <Formik
            enableReinitialize
            initialValues={{
              password,
              confirmPassword,
            }}
            validationSchema={paswordValidation}
            onSubmit={() => {
              resetHandler();
            }}
          >
            {(form) => (
              <Form>
                <LoginInput
                  type="password"
                  name="password"
                  icon="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <LoginInput
                  type="password"
                  name="confirmPassword"
                  icon="password"
                  placeholder="Confirm Password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <div className={styles.button}>
                  <CircledIconBtn type="submit" text="Submit" />
                </div>
              </Form>
            )}
          </Formik>
          <div>{error && <span className={styles.error}>{error}</span>}</div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Reset;

export async function getServerSideProps(context) {
  const { query, req } = context;
  const session = await getSession({ req });
  if (session) {
    return {
      redirect: {
        destination: '/',
      },
    };
  }
  const token = query.token;
  const user_id = jwt.verify(token, process.env.RESET_TOKEN_SECRET);
  return {
    props: {
      user_id: user_id.id,
    },
  };
}
