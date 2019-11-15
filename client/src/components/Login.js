import React,{useState} from 'react';
import axios from 'axios';

export default (props) => {
	const [loginForm, setLoginForm] = useState({
		username: '',
		password: ''
	})
	const sendLogin = (e) =>{
    e.preventDefault();
		axios.post('http://localhost:5000/api/login', loginForm)
			.then(res => {
        localStorage.setItem('token', res.data.payload)
				props.history.push('/bubblepage');
			})
			.catch(console.log)
  }
  const changeHandler = e =>{
    setLoginForm({
      ...loginForm,
      [e.target.name]: e.target.value
    })
  }
  return(
    <form onSubmit={sendLogin}>
      <input type="text" placeholder='username' name="username" value={loginForm.username} onChange={changeHandler}/>
      <input type="password" placeholder='password' name="password" value={loginForm.password} onChange={changeHandler}/>
      <input type="submit" value="Login"/>
    </form>
  )
}