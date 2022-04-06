import "./App.css";
import {Homepage,Login,SignUp,NoteDisplayPage,ArchiveDisplayPage,LabelDisplayPage} from "./pages";
import { Routes, Route } from 'react-router-dom';
import Mockman from 'mockman-js'
import {useAuth} from './hooks'


function MockAPI() {
  return (
    <div className="MockAPI">
      <Mockman />
    </div>
  );
}

function App() {
  const {auth} = useAuth();
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Homepage/>} />
      <Route path='/login' element={<Login/>}/>
      <Route path='/sign-up' element={<SignUp/>}/>
      <Route path='/notes' element={auth.isAuth?<NoteDisplayPage/>:<Login/>}/>
      <Route path='/archive' element={auth.isAuth?<ArchiveDisplayPage/>:<Login/>}/>
      <Route path='/labels' element={auth.isAuth?<LabelDisplayPage/>:<Login/>}/>
      <Route path='/mockman' element={<MockAPI/>}/>
    </Routes>    
    </div>
  );
}

export default App;
