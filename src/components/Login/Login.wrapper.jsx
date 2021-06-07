import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import "./login.css";


export default function LoginWrapper(props)  {
    const {actions,data}=props;
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();  

    const submitHandler = async (e) => {
    e.preventDefault();
    actions.loginS({username, password});
    history.push('/dashboard');
    }
  

    return (<div>
      
      <Typography variant="h4" component="h2">LOGIN</Typography>
      
      <form onSubmit={submitHandler}  className="box" noValidate autoComplete="off">
    
        <center><Avatar alt="Cindy Baker" src="https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png" /></center><br/>
        <TextField className="btn" onChange = {(e) => setUsername(e.target.value)}  id="un" label="Username" variant="outlined" /><br/><br/>
        <TextField className="btn" onChange = {(e) => setPassword(e.target.value)}  id="ps" label="Password" type="password" variant="outlined" /><br/><br/>
        <Button className="btn"  variant="contained" type="submit" color="primary">
         LOGIN
        </Button>
        <br/><br/>
        <Link style={{textDecoration:"none"}} href="/register">Dont have account, REGISTER</Link>
      </form>
      
    
    </div>);
  
}
