import { useState } from "react";
import { TextField, Typography } from "@mui/material";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import { Link, Navigate } from "react-router-dom";

export default function Login() {
  const [username,setUsername] = useState('')
    const [password,setpassword] = useState('')
  const [token,setToken] = useState()
    return (
      <div>
        <center>
          <div style={{paddingTop:150,paddingBottom: 25}}>
            <Typography variant={"h4"}> Welcome Back</Typography>
            </div>
            </center>

        <center> 
        <Card variant="outlined" style = {{border: '2px solid black',width:400,padding:20}}>
          <TextField 
            id={'username'}
            label="Username" 
            variant="standard"
            type="text" 
            fullWidth={true} 
            value={username}
            onChange={e => setUsername(e.target.value)}/>
          <br /><br />
           <TextField 
            id={'password'}
            label="Password" 
            variant="standard"
            type="password" 
            fullWidth={true}
            value={password}
            onChange={e => setpassword(e.target.value)}/>
          <br /><br />
          <Button 
              variant="contained" 
              size={"larger"}
              onClick={() => {
                function callback2(data){
                  localStorage.setItem('token',data.token)
                  setToken(data.token)

                  if (data.token){
                    
                  }else{
                    alert('Invalid email or password')
                  }
              console.log('token ' ,token)    
                }

                function callback1(res){
                  res.json().then(callback2)
                }
                fetch('http://localhost:3000/signin',{method:'POST',
              body:JSON.stringify({
                username,
                password
              }),
              headers: {
                'Content-Type': 'application/json'
              }}).then(callback1)
            }}>
               {token ? <Navigate to={'/expensetracker'}/> : ''}Signin</Button>
        </Card>
        </center>
      </div>
    )
  }
  
 