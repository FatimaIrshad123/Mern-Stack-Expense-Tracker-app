
import { TextField, Typography } from "@mui/material";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import { useState } from "react";


export default function AddIncome(){
    const [income,setIncome] = useState(0)
    const [title,setTitle] = useState('')
    return (
        <div style={{paddingTop:10}}>
          <center>
                <div style={{paddingTop:100,paddingBottom: 25}}>
                    <Typography variant={"h4"}> Add Income</Typography>
                </div>
            </center>

        <center>
        <Card variant="outlined" style = {{border: '2px solid black',width:400,padding:20}}>
            <TextField 
            id={'title'}
            label="Title" 
            variant="outlined"
            type="text" 
            fullWidth={true} 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />
          <br /><br />
          <TextField 
            id={'income'}
            label="Income" 
            variant="outlined"
            type="number" 
            fullWidth={true} 
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            />
            <br /><br />

            <Button 
              variant="contained" size={"larger"} onClick={() => {
                function callback2(data){
                    console.log(data)
                  }
  
                  function callback1(res){
                    res.json().then(callback2)
                  }

                fetch('http://localhost:3000/income',{method:'POST',
              body:JSON.stringify({
                income,
                title
              }),
              headers: {
                'Content-Type': 'application/json',
                'Authorization' : localStorage.getItem('token')
              }})
              .then(callback1)
              }}>Add Income</Button>
            </Card>
            </center>
         </div>
    )
}