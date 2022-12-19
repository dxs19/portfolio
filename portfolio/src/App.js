import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav'
import { Route, Routes } from 'react-router'
import Home from './pages/Home';
import Projects from './pages/Projects';

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route
            path='/'
            element={<Home />} />
          <Route
            path='/projects'
            element={<Projects />} />
        </Routes>

      </main>
    </div>
  );
}

export default App;
