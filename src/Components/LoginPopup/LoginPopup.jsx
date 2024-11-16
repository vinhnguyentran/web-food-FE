import React, { useContext, useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets-local/assets'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios';
const LoginPopup = ({ setShowLogin }) => {
    const [currState, setCurrState] = useState('Login')
    const {url,setToken} = useContext(StoreContext)
    const [data, setData] = useState({
        name: '',
        email: '',
        password: ''
    })
    const onChangeHandle = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData(data => ({...data, [name]: value}))
    }
    const onLogin = async (e) => {
        e.preventDefault()
        let newUrl = url;
        if (currState === 'Login') {
            newUrl += '/api/user/login'
        }else{
            newUrl += '/api/user/register'
        }
        const res = await axios.post(newUrl, data)
        if(res.data.success){
            setToken(res.data.token)
            localStorage.setItem('token', res.data.token)
            setShowLogin(false)
        }else{
            alert(res.data.message)
        }
    }
    return (
        <div className='login-popup'>
            <form className="login-popup-container" onSubmit={onLogin}>
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt='' />
                </div>
                <div className="login-popup-inputs">
                    {currState === 'Login' ? <></> : <input name='name' onChange={onChangeHandle} value={data.name} type='text' placeholder='Your name' required />}
                    <input onChange={onChangeHandle} name='email' value={data.email} type='email' placeholder='Your email' required />
                    <input onChange={onChangeHandle} name='password' value={data.password} type='password' placeholder='Password' required />
                </div>
                <button type='submit'>{currState === 'Sign Up' ? "Create account" : "Login"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By continuing, i agree to the term of use & privacy policy</p>
                </div>
                {currState === 'Login' ? <p>Create a new account 
                    ? <span onClick={() => setCurrState('Sign Up')}>Click here</span></p> 
                    : <p>Already have an account! <span onClick={() => setCurrState('Login')}>Login here</span></p>}


            </form>
        </div>
    )
}

export default LoginPopup
