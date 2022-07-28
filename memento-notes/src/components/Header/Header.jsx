import {useAuth,useNotes} from '../../hooks'
import { useNavigate,useLocation } from "react-router-dom";


export const Header = () => {

  const navigate = useNavigate();
  const {pathname} =useLocation();
  const {setAuth,initialAuth} = useAuth(); 
  const {state,dispatch} = useNotes();
  
  const LogOutHandler=()=>{
    localStorage.removeItem('token')
    localStorage.removeItem('isAuth')
    localStorage.removeItem('user')
    setAuth(initialAuth);
    dispatch({
      type:'LOGOUT_USER'
    })
    navigate('/login') 
    }

    return (
      <header className="header-wrapper">
        <div className="header-title">Memento</div>
        <div className="header-social-container">
          <div className="header-social-icon">
            <a
              className="social-link"
              rel="noreferrer"
              target="_blank"
              href="https://github.com/MurtazaBagwala07/Memento-React"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>

          <div className="header-social-icon">
            <a
              className="social-link"
              rel="noreferrer"
              target="_blank"
              href="https://twitter.com/MurtazaBagwala5"
            >
              <i className="fab fa-twitter-square"></i>
            </a>
          </div>
          {pathname!=='/login' && pathname!=='/sign-up' && <div onClick={()=>LogOutHandler()} className="header-social-icon">
          <i className="fas fa-sign-out-alt"></i>
          </div>}

        </div>
      </header>
    );
  };
  