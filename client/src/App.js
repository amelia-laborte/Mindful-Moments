import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import NewEntry from './components/NewEntry';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/create" element={<NewEntry/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
