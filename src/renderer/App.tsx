import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import CSVCreator from './CSVCreator';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CSVCreator />} />
      </Routes>
    </Router>
  );
}
