import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import "../Login/login.css";
import {pageConst} from './Register.pageConstants';


export default function LoginWrapper(props)  {
    const {actions,data}=props;
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfPass] = useState('');
      const {pageTitle, rusername, pass, passConfirm, regButton} = pageConst;

   // const {pageTitle, pageButton} = pageConst;
    
    

    
    const handleSubmit = async (e) => {
    e.preventDefault();
    if(password===confirm && password!=="" && username!==""){
      actions.register({username, password});
    }

    }
  

    return (<div>
      
      <Typography variant="h4" component="h2">{pageTitle}</Typography>
      
      <form onSubmit={handleSubmit}   className="box" noValidate autoComplete="off">
    
        <center><Avatar alt="Cindy Baker" src="https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png" /></center><br/>
        <TextField required className="btn" onChange = {(e) => setUsername(e.target.value)}  id="un" label={rusername.label} variant="outlined" /><br/><br/>
        <TextField required className="btn" onChange = {(e) => setPassword(e.target.value)}  id="ps" label={pass.label} type="password" variant="outlined" /><br/><br/>
        <TextField required className="btn" onChange = {(e) => setConfPass(e.target.value)} id="cps" label={passConfirm.label} type="password" variant="outlined" /><br/><br/>
        <Button className="btn"  variant="contained" type="submit" color="primary">
         {regButton.label}
        </Button>
      </form>
      
    
    </div>);
  
}
