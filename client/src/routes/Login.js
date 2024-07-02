import { signInWithGoogle } from '../auth/Firebase.js';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography } from '@mui/material';
import GoogleButton from 'react-google-button';
import FadeLoader from 'react-spinners/FadeLoader';
import { useDispatch } from 'react-redux';
import { isAuth } from '../redux/actions/index.js';
import axios from '../axios-study.js';

function Login() {
  let [loading, setLoading] = React.useState(false);
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const authHandle = () => {
    signInWithGoogle()
      .then((result) => {
        setLoading(true);

        var data = {
          name: result.user.displayName,
          uid: result.user.uid
        };
        axios
          .post('/login', data)
          .then((response) => {
            setLoading(false);
            sessionStorage.setItem('user', response.data.name);
            sessionStorage.setItem('uid', response.data.uid);
            navigate('/dashboard', {
              state: {
                name: response.data.name,
                uid: response.data.uid,
                balance: response.data.balance,
                photoURL: result.user.photoURL
              }
            });
          })
          .catch((error) => console.log(error));
        dispatch(isAuth());
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'column',
        alignItems: 'center',
        opacity: loading ? '0.5' : '1',
        overflowY: 'hidden'
      }}>
      <Typography align="center" variant="h2">
        Auction Management System
      </Typography>
      <GoogleButton onClick={authHandle} />
      <Typography align="center" variant="h5">
        <Typography
          style={{
            display: 'flex',
            justifyContent: 'center',
            width: '60vw'
          }}>
          <Typography>
            <Typography align="center" variant="h5">
              Shubham Handa
            </Typography>
            <Typography align="center">2020A3PS1786P</Typography>
          </Typography>
        </Typography>
      </Typography>
      <FadeLoader
        color={'blue'}
        loading={loading}
        size={350}
        css={{ position: 'absolute', left: '50%', top: '50%' }}
      />
    </Container>
  );
}

export default Login;
