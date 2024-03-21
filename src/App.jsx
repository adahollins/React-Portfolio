import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProjectGallery from './pages/Project-Gallery';
import './App.css'

function App() {
  return (
      <>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/ProjectGallery" element={<ProjectGallery />} />
          </Routes>
      </>
  );
}

export default App
