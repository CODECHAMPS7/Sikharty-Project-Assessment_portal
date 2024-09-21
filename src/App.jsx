import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Body from './components/Body';
import Login from './Pages/Login';
import Signup from './Pages/SIgnup';  
import Dashboard from './Pages/Dashboard';
import Profile from './Pages/profile';
import Footer from './components/Footer';
import Quiz from './Pages/Quiz';
import Navbar from './components/Navbar'; 

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
       
        <Navbar /> 

        
        <div className="flex-grow">
          <Routes>
            
            <Route path="/" element={<Home />} />

           
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/" element={<Body />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/quiz" element={<Quiz />} />
          </Routes>
        </div>

        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
