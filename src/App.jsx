import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';

import Navbar from './components/Navbar'; // Importing Navbar component
import Home from './components/Home';     // Importing Home component
import Body from './components/Body';     // Importing Body component
import Login from './Pages/Login';        // Importing Login page
import Signup from './Pages/Signup';      // Importing Signup page
import Dashboard from './Pages/Dashboard';// Importing Dashboard page
import Profile from './Pages/Profile';    // Importing Profile page
import Footer from './components/Footer'; // Importing Footer component
import Quiz from './Pages/Quiz';          // Importing Quiz page

// Main layout component including Navbar and Footer
const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar /> {/* Navbar visible across all routes */}
      <div className="flex-grow">
        <Outlet /> {/* Renders the specific route component */}
      </div>
      <Footer /> {/* Footer visible across all routes */}
    </div>
  );
};

// Home layout component with Home content and Body
const HomeLayout = () => {
  return (
    <>
      <Home />
      <Outlet /> {/* Renders the specific route component */}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Home route layout */}
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Body />} /> {/* Default route */}
        </Route>

        {/* Main layout for all other routes */}
        <Route element={<MainLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="quiz" element={<Quiz />} /> {/* Route for Quiz page */}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
