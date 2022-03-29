import React,{createContext,useState,useEffect} from 'react'

export const AuthContext = createContext();

export const AuthProvider = ({children})=>{
    const initialAuth={ token: "", isAuth: false }
    const [auth,setAuth]=useState(initialAuth);
    
    useEffect(()=>{
        const token = localStorage.getItem("token");
		if (token) setAuth({ token, isAuth: true });
        else setAuth(initialAuth);
    },[])
    
    console.log(auth)
    
    return(
        <AuthContext.Provider value={{auth,setAuth,initialAuth}}>
            {children}
        </AuthContext.Provider>
    )
}