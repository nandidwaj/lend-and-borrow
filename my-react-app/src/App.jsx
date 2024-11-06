import Landing from './landing/landing.jsx'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './loginsignup/login.jsx'
import Signup from './loginsignup/signup.jsx'
import ProfileL from './lender/profileL.jsx'
import DocumentL from './lender/documents.jsx' 
import Borrowwrite from './Borrowerwrite/borrowwrite.jsx'
import Lenderwrite from './Lenderwrite/lenderwrite.jsx'
import Aboutwrite from './About/aboutwrite.jsx'
import Terms from './Termsbox/terms.jsx'
import Layout from './layout.jsx'
function App() {
  return(
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}/>
        <Route path="/landing" element={<Landing/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/profileL" element={<ProfileL/>}/>
        <Route path="/documentL" element={<DocumentL/>}/>
        <Route path='/borrower' element={<Borrowwrite/>}/>
        <Route path='/lender' element={<Lenderwrite/>}/>
        <Route path='/about' element={<Aboutwrite/>}/>
        <Route path='/terms' element={<Terms/>}/>
      </Routes>
    </Router>
    
      </>
  );
}

export default App
