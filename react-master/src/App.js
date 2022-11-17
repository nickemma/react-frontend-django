import './index.css';
import Header from './components/Header';
import Employees from './pages/Employees';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dictionary from './components/Dictionary';

function App() {
  return (
    <BrowserRouter>
      <Header>
        <Routes>
          <Route path="/" element={<Employees />} />
          <Route path="/dictionary" element={<Dictionary />} />
        </Routes>
      </Header>
    </BrowserRouter>
  );
}

export default App;
