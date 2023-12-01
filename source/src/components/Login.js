import { useState } from "react";
import style from '../css/Home.css'
function Login({checkLogin,errorlogin}){
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const handleLogin = (e) =>{
        e.preventDefault();
        const checkUser = {username,password};
        checkLogin(checkUser);
        setUsername('');
        setPassword('')
    }
    return(
        <form onSubmit={handleLogin}>
            <table className="login">
            <h4>{errorlogin}</h4>
            <tr>
                
                <td>Username</td>
                <td><input type="text" value={username} 
                onChange={(e)=> setUsername(e.target.value)}/></td>
            </tr> 
            <tr>   
                <td>Password</td>
                <td><input type="password" value={password} 
                onChange={(e)=> setPassword(e.target.value)}/></td>
            </tr>
            <tr>
                <td colSpan="2"><input type="submit"/></td>
            </tr>
            </table>
        </form>
        
    )
}
export default Login;