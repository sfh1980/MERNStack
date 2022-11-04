
import './App.css';
import { Routes, Route } from 'react-router-dom'


import SearchResultsPeople from './components/SearchResultsPeople';
import SearchResultsPlanet from './components/SearchResultsPlanet';
import SearchFor from './components/SearchFor';
import ErrorPage from './components/ErrorPage';




function App() {
  return (
    <div className="App">
      <h1>Luke APIwalker</h1>
      <SearchFor/>

      <Routes>        
        <Route path="/people/:id" element={<SearchResultsPeople/>}/>        
        <Route path="/planets/:id" element={<SearchResultsPlanet/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </div>
  );
}

export default App;



