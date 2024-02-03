import { Typography } from "@mui/material";
import Button from '@mui/material/Button';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Appbar(){
    const [user,setuser] = useState(null)
    useEffect(() => {
        function callback2(data){
            if (data.user.username){
                setuser(data.user.username)
            }
          }
          function callback1(res){
            res.json().then(callback2)
          }
          fetch('http://localhost:3000/me',{method:'GET',
            headers:{'Authorization' : localStorage.getItem('token')}
        }).then(callback1)
    },[])
    if (user){
        return (
            <div style={{display:'flex',justifyContent:'space-between'}}>
                <div>
                    <Typography><Link to={'/courses'}>Expense Tracker</Link></Typography>
                </div>
                <div style={{marginRight:10}}>
                    <Button variant="contained" style={{marginRight:10}}><Link to={'/'}>Home</Link></Button>
                    <Button variant="contained"style={{marginRight:10}}>{user}</Button>
                    <Button variant="contained" style={{marginRight:10}}><Link to={'/expensetracker'}>ExpenseTracker</Link></Button>
                    <Button variant="contained" style={{marginRight:10}}><Link to={'/login'} 
                    onClick={() => localStorage.clear('token')}>Logout</Link></Button>
                </div>
            </div>
        )}      
    return (
        <div style={{display:'flex',justifyContent:'space-between'}}>
            <div>
                <Typography>Expense Tracker</Typography>
            </div>
            <div style={{marginRight:10}}>
                <Button variant="contained" style={{marginRight:10}}><Link to={'/'}>Home</Link></Button>
                <Button variant="contained"style={{marginRight:10}}><Link to={'/login'}>Sign in</Link></Button>
                <Button variant="contained" style={{marginRight:10}}><Link to={'/signup'}>Sign up</Link></Button>
            </div>
        </div>
    )
}
