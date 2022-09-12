import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import NewEntry from './components/NewEntry';
import AllEntries from './components/AllEntries';
import EditEntry from './components/Edit';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/create" element={<NewEntry/>}></Route>
          <Route path="/entries" element={<AllEntries/>}></Route>
          <Route path="/edit/:id" element={<EditEntry/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
