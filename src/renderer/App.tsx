import { Provider } from 'react-redux';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
// eslint-disable-next-line import/no-unresolved
import { store } from '../app/store';
import './styles/global.scss';
import Editor from './pages/Editor';
import Login from './pages/Login';

function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/editor" element={<Editor />} />
            <Route path="/" element={<Login />} />
          </Routes>
        </Router>
      </Provider>
    </React.StrictMode>
  );
}

export default App;
