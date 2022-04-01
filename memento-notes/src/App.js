import "./App.css";
import {Homepage,Login,SignUp,NoteDisplayPage,ArchiveDisplayPage} from "./pages";
import { Routes, Route } from 'react-router-dom';
import Mockman from 'mockman-js'


function MockAPI() {
  return (
    <div className="MockAPI">
      <Mockman />
    </div>
  );
}

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Homepage/>} />
      <Route path='/login' element={<Login/>}/>
      <Route path='/sign-up' element={<SignUp/>}/>
      <Route path='/notes' element={<NoteDisplayPage/>}/>
      <Route path='/archive' element={<ArchiveDisplayPage/>}/>
      <Route path='/mockman' element={<MockAPI/>}/>
    </Routes>    
    </div>
  );
}

export default App;
