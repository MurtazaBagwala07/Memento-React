import axios from "axios";

export const LoginService=async(email,password)=>{
    try {
        const response =await axios.post('/api/auth/login',
    {
        email, password
    })
    
    if(response.status===200||response.status===201){
        return response.data;
    }
    } catch (error) {
        console.log(error)
    }
    
}

export const SignUpService=async(firstname,lastname,email,password)=>{
    try {
        const response =await axios.post('/api/auth/signup',
    {
        firstname, lastname, email, password
    })
    
    if(response.status===200||response.status===201){
        return response.data.encodedToken;
    }
    } catch (error) {
        console.log(error)
    }
    
}