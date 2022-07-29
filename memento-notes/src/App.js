import "./App.css";
import {Homepage,Login,SignUp,NoteDisplayPage,ArchiveDisplayPage,LabelDisplayPage,NotFound,Profile} from "./pages";
import { Routes, Route } from 'react-router-dom';
import Mockman from 'mockman-js'
import {useAuth} from './hooks'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
      <ToastContainer
        position='bottom-right'
        autoClose={false}
        newestOnTop={false}
        closeOnClick
        theme='colored'
        rtl={false}
        pauseOnFocusLoss
        draggable
      />
    <Routes>
      <Route path='/' element={<Homepage/>} />
      <Route path='/login' element={<Login/>}/>
      <Route path='/sign-up' element={<SignUp/>}/>
      <Route path='/notes' element={auth.isAuth?<NoteDisplayPage/>:<Login/>}/>
      <Route path='/archive' element={auth.isAuth?<ArchiveDisplayPage/>:<Login/>}/>
      <Route path='/labels' element={auth.isAuth?<LabelDisplayPage/>:<Login/>}/>
      <Route path='/mockman' element={<MockAPI/>}/>
      <Route path='/profile' element={<Profile/>}></Route>
      <Route path='*' element={<NotFound/>}></Route>
    </Routes>    
    </div>
  );
}

export default App;
