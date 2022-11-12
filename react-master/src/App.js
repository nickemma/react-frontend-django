import Employee from './components/Employee';
import './index.css';
import { useState } from 'react';

function App() {
  const [role, setRole] = useState('dev');

  return (
    <div className="App">
      <input
        type="text"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />
      <Employee name="john" role="intern" />
      <Employee name="oyin" role={role} />
      <Employee name="said" />
    </div>
  );
}

export default App;
