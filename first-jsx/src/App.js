import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <Header/>
        <Navigation/>
        <Main>
          <SubContents/>
          <SubContents/>
          <SubContents/>
          <Advertisement/>
        </Main>
    </div>
  );
}

export default App;
