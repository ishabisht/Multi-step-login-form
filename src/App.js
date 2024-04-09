import React from 'react';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import SignUpForm from './components/SignUpFrom';
import ProfileSetup from './components/ProfileSetup';
import ThirdPage from './components/ThirdPage';
import EndPage from './components/EndPage';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route exact path="/" element={<SignUpForm />} />
      <Route  path="/signup" element={<SignUpForm />} />
        <Route path="/profile-setup" element={<ProfileSetup />} />
        <Route path="/third" element={<ThirdPage/>} />
        <Route path="/fourth" element={<EndPage/>} />
      </Routes>
    </Router>
  );
};

export default App;
