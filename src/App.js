import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Alert message="hello guys" />
          <div className="container">
            <Routes>

              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />

            </Routes>
          </div>

        </Router>
      </NoteState>
    </>
  );
}

export default App;
