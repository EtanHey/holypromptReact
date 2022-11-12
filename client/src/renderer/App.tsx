import { Provider } from 'react-redux';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useEffect } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
// eslint-disable-next-line import/no-unresolved
import { store } from '../app/store';
import './styles/global.scss';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <GoogleOAuthProvider clientId="135944204796-spcoagv2me3klopvoqp8p85ekmbsmtfq.apps.googleusercontent.com">
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/" element={<Login />} />
            </Routes>
          </Router>
        </Provider>
      </React.StrictMode>
    </GoogleOAuthProvider>
  );
}

export default App;
