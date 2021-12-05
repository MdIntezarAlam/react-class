import { useState } from 'react';//Using UseState
import axios from 'axios'; //Using Axios
const LoginForm = () => {
    const [username, setUsename] = useState('') //This is For UserName Details
    const [password, setPassword] = useState('')//This is For Password Details
    const [error, seterror] = useState('')//This is For Error Details

    //This is UserOnchange Function
    const userOnchange = (e) => {
        setUsename(e.target.value)
    }
    //This is Password Onchange Function
    const passwordOnchange = (e) => {
        setPassword(e.target.value)
    }
    //This is Handle Submit
    const handleSubmit = async (e) => {
        e.preventDefault(); //Browser Default
        const authObject = { 'project-ID': "a9b281bd-170f-476d-8816-e1242717d294", 'User-Name': username, 'User-Secret': password };
        try {
            await axios.get('https://api.chatengine.io/chats', { headers: authObject })
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            window.location.reload();
        }
        //if User Name is Not Correct Then error Will Show
         catch (error) {
            seterror('Please Enter Correct Usename and Password.')
        }
    }
    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat App</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={userOnchange} className="input" placeholder="Enter UserName" />
                    <input type="password" value={password} onChange={passwordOnchange} className="input" placeholder="Password" />
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Starting Chating</span>
                        </button>
                    </div>
                    <h2 className="error">{error}</h2>
                </form>
            </div>
        </div>
    )
}
export default LoginForm
