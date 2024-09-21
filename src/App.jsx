import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';

import Home from './components/Home';
import Body from './components/Body';
import Login from './Pages/Login';
import Signup from './Pages/SIgnup';  // Fix casing for Signup
import Dashboard from './Pages/Dashboard';
import Profile from './Pages/profile';
import Footer from './components/Footer';
import Quiz from './Pages/Quiz';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Home />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}


function App() {
  return (
    <Router>
      <Routes>
      
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Body />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} /> 
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path='Quiz' element ={<Quiz />}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;