import "./App.css";
import {Homepage} from "./pages";
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Homepage/>} />
      <Route path='/sign-in' />
      <Route path='/sign-up' />
      <Route path='/notes' />
      <Route path='/archive' />
      <Route path='/bin' />
    </Routes>    
    </div>
  );
}

export default App;
