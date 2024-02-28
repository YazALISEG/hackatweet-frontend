import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import styles from '../styles/Login.module.css';
import Image from 'next/image';
import { Modal } from 'antd';
import SignUp from './SignUp.js';
import SignIn from './SignIn.js';


function Login() {
  const user = useSelector((state) => state.user.value);
  const [signUpModalVisible, setSignUpModalVisible] = useState(false);
  const [signInModalVisible, setSignInModalVisible] = useState(false);

  const showSignUpModal = () => {
    setSignUpModalVisible(true);
  };

  const showSignInModal = () => {
    setSignInModalVisible(true);
  };

  const handleCancelSignUp = () => {
    setSignUpModalVisible(false);
  };

  const handleCancelSignIn = () => {
    setSignInModalVisible(false);
  };

  // Redirect to /home if logged in
  const router = useRouter();
  if (user.token) {
    router.push('/');
  }

  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
      <Image src="/logo.png" alt="Logo" width={350} height={350} />
      </div>
      <div className={styles.rightSection}>
        <Image src="/logo.png" alt="Logo" width={50} height={50} />
        {/* <div className={styles.content_container}>
        <p className={styles.content__container_text}>
        See what’s
    </p>
    
    <ul className={stylesScss.content__container_list}>
      <li className={stylesScss.content__container__list__item}>happening !</li>
      <li className={stylesScss.content__container__list__item}>incident</li>
      <li className={stylesScss.content__container__list__item}>event</li>
      <li className={stylesScss.content__container__list__item}>goings-on</li>
    </ul>
        <h2 className={styles.title}>See what’s<br></br>happening</h2>
        </div> */}
        <p className={styles.joinHacka}>Join Hackatweet today.</p>
        <div onClick={() => showSignUpModal()} className={styles.signUp}><a className={styles.signMainUpText}> Sign up</a></div>
        <p>Already have an account?</p>
        <div onClick={() => showSignInModal()} className={styles.signIn}><a className={styles.signMainInText}> Sign in </a></div>
      </div>

      <Modal onCancel={() => handleCancelSignUp()} visible={signUpModalVisible} footer={null}>
        <SignUp />
      </Modal>

      <Modal onCancel={() => handleCancelSignIn()} visible={signInModalVisible} footer={null}>
        <SignIn />
      </Modal>
    </div>
  );
}

export default Login;
