import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css'
import Authentication from './components/unProtected/authentication/Authentication';
import Home from './components/unProtected/home/Home';
import Layout from './components/protected/Layout/Layout';

function App() {
  
  return (
  <>
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<Home/>}/>
      <Route path="/login" element={<Authentication />}/>
      <Route path="/register" element={<Authentication/>}/>
      <Route path="/*" element={<Layout />} />
    </Routes>
  </>
  );
}

export default App
