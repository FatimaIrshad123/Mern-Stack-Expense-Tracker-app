import { useState,useEffect } from "react"
import { Typography,TextField } from "@mui/material"
import {Button} from "@mui/material"
import axios from "axios";

export default function Input(){
    const [incometitle,setIncomeTitle] = useState()
    const[income,setIncome] = useState(0)
    const [expensetitle,setExpenseTitle] = useState('')
    const [expense,setExpense] = useState(0)

    return(
        <div className="lg:flex space-x-11 ml-20">
             <div className=''>
                    <h2 className="text-green-500 text-3xl font-bold"> Add Income </h2>
                <div style = {{width:400,padding:20, border:'2px solid green'}}>
                    <TextField  id={'title'} label="Title" variant="outlined" type="text" fullWidth={true} 
                        value={incometitle}
                        onChange={(e) => setIncomeTitle(e.target.value)}
                    />
                    <br /><br/>
                    <TextField  id={'income'} label="Income" variant="outlined" type="number" fullWidth={true} 
                        value={income}
                        onChange={(e) => setIncome(e.target.value)}
                    />
                    <br /><br />
                    <Button variant="contained" size={"larger"} style={{backgroundColor:'green'}} 
                        onClick={() => {
                            axios.post('http://localhost:3000/income',{
                                title : incometitle,
                                income
                            },{
                                headers : {
                                'Authorization' : localStorage.getItem('token')
                                }
                            })
                        }}>Add Income </Button>
                </div>
            </div>

        <div className=''>
            <h2 className="text-red-500 text-3xl font-bold"> Add Expense</h2>
                <div style = {{border: '2px solid red',width:400,padding:20}}>
                    <TextField id={'title'} label="Title" variant="outlined" type="text"  fullWidth={true}
                        value={expensetitle}
                        onChange={(e) => setExpenseTitle(e.target.value)}
                    />
                    <br /><br />
                    <TextField id={'expense'} label="Expense"  variant="outlined" type="number" fullWidth={true} 
                        value={expense}
                        onChange={(e) => setExpense(e.target.value)}
                    />
                    <br /><br />
                    <Button style={{backgroundColor:'red'}} variant="contained" size={"larger"} onClick={() => {
                        axios.post('http://localhost:3000/expense',{
                            expensetitle,
                            expense
                        },{
                            headers : {
                            'Authorization' : localStorage.getItem('token')
                            }
                        })
                    }}>Add Expense</Button>
                </div>
            </div>
        </div>
    )
}