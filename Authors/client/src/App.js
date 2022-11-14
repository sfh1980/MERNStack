import './App.css';
import { Routes, Route } from 'react-router-dom'
import Main from './components/Main';
import AuthorsCreate from './components/AuthorsCreate'
import AuthorsEdit from './components/AuthorsEdit'

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/new" element={<AuthorsCreate />} />
      <Route path="/:id/edit" element={<AuthorsEdit />} />

      </Routes>
    </div>
  );
}

export default App;
