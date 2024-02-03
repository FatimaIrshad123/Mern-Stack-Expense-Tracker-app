import { useEffect, useState } from "react"
import { Typography,TextField } from "@mui/material"
import {Button} from "@mui/material"
import Card from '@mui/material/Card';
import ReactFlow, { Controls, Background } from 'reactflow';
import 'reactflow/dist/style.css';

const edges = [{ id: '1-2', source: '1', target: '2' },{ id: '1-3', source: '1', target: '3' },
{ id: '3-4', source: '3', target: '4' },{ id: '2-5', source: '2', target: '5' }];
const nodes = [
    {
      id: '1',
      data: { label: 'Expense Tracker' },
      position: { x: 0, y: 0 },
      type: 'input',
    },
    {
      id: '2',
      data: { label: 'Income' },
      position: { x: 100, y: 100 },
    },
    {
        id: '3',
        data: { label: 'Expense' },
        position: { x: -70, y: 100 },
      }
    ];
export default function ExpenseAndIncome(){
    const [incomedata,setIncomeData] = useState()
    const [expensedata,setexpenseData] = useState()
    const [income,setIncome] = useState(0)
    const [title,setIncomeTitle] = useState('')
    const [expense,setExpense] = useState(0)
    const [expensetitle,setExpenseTitle] = useState('')
    const [totalincome,setTotalIncome] = useState(0)
    const [totalExpense,setTotalExpense] = useState(0)

    useEffect(() => {        
        function callback2(data){
            var total = data?.map((val)=>Number(val?.income));
                setTotalIncome(total.reduce((pre,cur) => {
                    return pre + cur
                }))
           setIncomeData([...data])
        }
        function callback1(res){
            res.json().then(callback2)
        }
        fetch('http://localhost:3000/income',{headers:{
                'Authorization' : localStorage.getItem('token')
            }}).then(callback1)  
        },[])
    useEffect(() => {
        function callback2(data){
           let total = data?.map((val)=>Number(val?.expense));
           setTotalExpense(total.reduce((pre,cur) => {
            return pre + cur
        }))
           setexpenseData([...data])
        }
        function callback1(res){
            res.json().then(callback2)
        }
        fetch('http://localhost:3000/expense',{headers:{
            'Authorization' : localStorage.getItem('token')
        }}).then(callback1)
      },[])
    return (
        <div>
            <div className="flex">
                <div style={{ height: '50vh', width:'70vh'}} className="p-5 m-10">
                      <ReactFlow nodes={nodes} edges={edges}>
                        <Background />
                      </ReactFlow>
                </div>
                <div className='text-center text-2xl font-semibold p-10 bg-gray-200 rounded-lg shadow-lg m-12 mx-36'>
                    <h3 className='text-green-700'>Total Income : {totalincome}</h3>
                    <h3 className='text-red-700'>Total Expense : {totalExpense}</h3>
                    <h3 className='text-blue-700'>Saving : {totalincome - totalExpense}</h3>
                </div>
            </div>
            <div className="md:grid grid-cols-3 p-10">    
                <div  className='justify-center text-center'>
                    <h2 className="text-green-500 text-3xl font-bold"> Add Income </h2>
                    <Card variant="outlined" style = {{width:400,padding:20, border:'2px solid green'}}>
                        <TextField 
                            id={'title'}
                            label="Title" 
                            variant="outlined"
                            type="text" 
                            fullWidth={true} 
                            value={title}
                            onChange={(e) => setIncomeTitle(e.target.value)}
                        />
                    <br /><br/>
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
                        variant="contained" size={"larger"} style={{backgroundColor:'green'}} onClick={() => {
                        function callback2(data){}
                        function callback1(res){
                            res.json().then(callback2)
                          }
                    fetch('http://localhost:3000/income',{method:'POST',
                    body:JSON.stringify({
                        title,
                        income
                    }), headers: {
                        'Content-Type': 'application/json',
                        'Authorization' : localStorage.getItem('token')
                    }}).then(callback1)
                    }}>Add Income</Button>
                </Card>
            </div>
            <div className='justify-center text-center'>
                <h2 className="text-red-500 text-3xl font-bold"> Add Expense</h2>
                <Card variant="outlined" style = {{border: '2px solid red',width:400,padding:20}}>
                    <TextField 
                        id={'title'}
                        label="Title" 
                        variant="outlined"
                        type="text" 
                        fullWidth={true} 
                        value={expensetitle}
                        onChange={(e) => setExpenseTitle(e.target.value)}
                    />
                    <br /><br />
                    <TextField 
                        id={'expense'}
                        label="Expense" 
                        variant="outlined"
                        type="number" 
                        fullWidth={true} 
                        value={expense}
                        onChange={(e) => setExpense(e.target.value)}
                    />
                    <br /><br />
                    <Button style={{backgroundColor:'red'}}
                        variant="contained" size={"larger"} onClick={() => {
                        function callback2(data){}
                        function callback1(res){
                            res.json().then(callback2)
                        }
                        fetch('http://localhost:3000/expense',{method:'POST',
                            body:JSON.stringify({
                            expense,
                            expensetitle
                        }), headers: {
                            'Content-Type': 'application/json',
                            'Authorization' : localStorage.getItem('token')
                        }}).then(callback1)
                          }}>Add Expense</Button>
                    </Card>
                </div>
            </div>
        <div className="flex justify-center p-10 space-x-4 " >
            <div className="bg-green-500 p-10 rounded-lg shadow-2xl text-white">
                {incomedata?.length > 0 && incomedata?.map((e)=>(              
                <div key={e._id}>
                    <h3 className="text-2xl">Income Title : {e.title} </h3>
                    <h4 className="text-1xl">Income Amount: {e.income}</h4>  
                </div>
            ))}</div>
            <div className=" bg-red-400 p-10 rounded-lg shadow-2xl text-white">             
                {expensedata?.length > 0 && expensedata?.map((e)=>(
                <div key={e._id}>
                    <h3 className="text-2xl">Expense Title : {e.expensetitle} </h3>
                    <h4 className="text-1xl">Expense Amount: {e.expense}</h4>  
                </div>
            ))}
            </div>   
        </div>    
    </div>    
)}
