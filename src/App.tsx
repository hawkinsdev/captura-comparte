import React from 'react';
import AppProvider from './navigation/AppProvider';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

const App: React.FC = () =>{
  return (
    <AppProvider />
  );
}

export default App;
