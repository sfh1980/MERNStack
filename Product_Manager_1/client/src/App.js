
import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom'
import Main from './components/Main';
import ShowOne from './components/ShowOne';
import EditOne from './components/EditOne';

function App() {
  return (
    <div className="App">
      <Routes>

        <Route path='/product' element={<Main/>} />
        <Route path='/product/:id' element={<ShowOne/>} />
        <Route path='/product/:id/edit' element={<EditOne/>} />

        <Route path='*' element={ <Navigate to="/product" replace/> } />

      </Routes>
    </div>
  );
}

export default App;
