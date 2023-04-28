import { useState } from 'react';
import { BiLeftArrowAlt } from 'react-icons/bi';
import Link from 'next/link';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import axios from 'axios';

import styles from '../../styles/forgot.module.scss';
import Header from '../../components/header';
import Footer from '../../components/footer';
import CircledIconBtn from '../../components/buttons/circledIconBtn';
import LoginInput from '../../components/inputs/loginInput';
import DotLoaderSpinner from '../../components/loaders/dotLoader';

const Forgot = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const emailValidation = Yup.object({
    email: Yup.string()
      .email('Please enter a valid email address')
      .required('Email address is required'),
  });

  const forgotHandler = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post('/api/auth/forgot', {
        email,
      });
      setError('');
      setSuccess(data.message);
      setLoading(false);
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
            Forgot your password! <Link href="/">Login Instead</Link>
          </span>
        </div>
        <div className={styles.forgot_form}>
          <Formik
            enableReinitialize
            initialValues={{
              email,
            }}
            validationSchema={emailValidation}
            onSubmit={() => {
              forgotHandler();
            }}
          >
            {(form) => (
              <Form>
                <LoginInput
                  type="text"
                  name="email"
                  icon="email"
                  placeholder="Email Address"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className={styles.button}>
                  <CircledIconBtn type="submit" text="Send Link" />
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
      <Footer />
    </>
  );
};

export default Forgot;
