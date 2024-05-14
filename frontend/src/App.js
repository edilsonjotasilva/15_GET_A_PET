import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

//import Components
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer';
import Container from './components/layout/Container';
 import Message from './components/layout/Message';
//import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
//import CSS
// import './index.css'
//import Pages
import Login from './components/pages/Auth/Login'
import Register from './components/pages/Auth/Register'
import Home from './components/pages/Home';

// context
import { UserProvider } from './context/UserContext';

function App() {
  return (
    <Router>
      <UserProvider>
      <Navbar />
      <Message />
        <Container>
          <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="/users" element={<Users />} /> */}
              <Route path="login" element={<Login/>} />
              <Route path="/allusers" element={<Navigate to="/users" />} />
              {/* <Route path="/contact" element={<Contact />} /> */}
              <Route path="register" element={<Register />} />
          </Routes>
        </Container>
        <Footer />
      </UserProvider>
    </Router>
  )
}


export default App;
