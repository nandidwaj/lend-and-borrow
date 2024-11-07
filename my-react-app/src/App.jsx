import Landing from './landing/landing.jsx'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './loginsignup/login.jsx'
import Signup from './loginsignup/signup.jsx'
import ProfileL from './lender/profileL.jsx'
import DocumentL from './lender/documents.jsx'
import Dashboard from './lender/dashboard.jsx' 
function App() {
  return(
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/profileL" element={<ProfileL/>}/>
        <Route path="/documentL" element={<DocumentL/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </Router>
      </>
  );
}

export default App
