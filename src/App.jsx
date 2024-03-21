import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Project_Gallery from './pages/Project_Gallery';
import Menu from './components/Menu';


export default function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project_gallery" element={<Project_Gallery />} />
      </Routes>
    </>
  );
}
