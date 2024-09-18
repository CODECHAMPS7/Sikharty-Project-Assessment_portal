import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';

import Navbar from './components/Navbar'; // Make sure to import your Navbar component
import Home from './components/Home';
import Body from './components/Body';
import Login from './Pages/Login';
import Signup from './Pages/Signup'; // Fixed casing for Signup
import Dashboard from './Pages/Dashboard';
import Profile from './Pages/Profile'; // Fixed casing for Profile

// Main layout component including Navbar
const MainLayout = () => {
  return (
    <>
      <Navbar /> {/* Navbar visible across all routes */}
      <Outlet /> {/* Renders the specific route component */}
    </>
  );
}

const HomeLayout = () => {
  return (
    <>
      <Home />
      <Outlet /> {/* Renders the specific route component */}
    </>
  );
}

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Home route layout */}
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Body />} /> {/* Default route */}
        </Route>

        {/* Main layout without Home */}
        <Route element={<MainLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
