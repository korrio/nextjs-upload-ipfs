import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../context/AuthUserContext';
import Head from 'next/head'
import DropArea from '../components/DropArea'
// import styles from '../styles/Upload.module.css'
import styles from '../styles/Home.module.css'

import {Container, Row, Col, Button} from 'reactstrap';

const LoggedIn = () => {
  const { authUser, loading, signOut } = useAuth();
  const router = useRouter();

  // Listen for changes on loading and authUser, redirect if needed
  useEffect(() => {
    if (!loading && !authUser)
      router.push('/')
  }, [authUser, loading])

  return (
    <div className={styles.container}>
        <Head>
        <title>Upload File</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        {
          loading ?
            <Row>
              <Col>Loading....</Col>
            </Row> :
            <>
              <Row>
                <Col>
                  { authUser && <div>Congratulations {authUser?.email}! You are logged in.</div> }
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button onClick={signOut}>Sign out</Button>
                </Col>
              </Row>
              <main className={styles.main}>
                <h1 className={styles.title}>
                    Upload File to Web3.Storage
                </h1>
                <DropArea/>
              </main>
            </>
        }
    </div>
  )
}

export default LoggedIn;
