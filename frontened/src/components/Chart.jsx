import React,{useState,useEffect} from 'react';
import ReactFlow ,{Background}from 'reactflow';
import { useRecoilState, useRecoilValue } from "recoil"
import { ExpenseData, IncomeData } from "../store/Atom"

import 'reactflow/dist/style.css';

const edges = [{ id: '1-2', source: '1', target: '2' },{ id: '1-3', source: '1', target: '3' },
{ id: '3-4', source: '3', target: '4' },{ id: '2-5', source: '2', target: '5' },
{id:'1-6',source:'1',target:'6'},{id:'6-7',source:'6',target:'7'}];

const initialnodes = [
    {id: '1',data: { label: 'Expense Tracker' },position: { x: 0, y: 0 }},
    {id: '2', data: { label: 'Expense' },position: { x: 100, y: 100 }},
    {id: '3',data: { label: 'Income' },position: { x: -70, y: 100 }},
    {id: '4', data: { label: '63000' },position: { x: -70, y: 200 }},
    {id: '5', data: { label: '' },position: { x: 100, y: 200 }},
    {id:'6',data: {label:'Saving'},position: {x:270,y:100}},
    {id:'7',data:{label:''},position:{x:270,y:200}}
    ]

    export default function Chart(){
        const [nodes,setNode] = useState(initialnodes)

        const [totalincome,setTotalIncome] = useRecoilState(IncomeData)
        const [totalexpense,setTotalexpense] = useRecoilState(ExpenseData)
        const [income,setIncome] = useState()
        const [expense,setExpense] = useState()

   useEffect(() => {
        let total = totalincome?.map((val)=>Number(val?.income))
        setIncome(total.reduce((pre,cur) => {return pre + cur}))
    },[totalincome])

   useEffect(() => {
        let total = totalexpense?.map((val)=>Number(val?.expense))
        setExpense(total.reduce((pre,cur) => {return pre + cur}))
    },[totalexpense])
        
    nodes.map(e => {
        if(e.id == 5){
            return e.data.label = expense
        }else if(e.id == 4){
            return e.data.label = income
        }else if(e.id == 7){
            return e.data.label = income - expense
        }
    })

        return (        
        <div>
            <div style={{ height: '70vh', width:'100vh'}} className="p-5 m-10">
                <ReactFlow nodes={nodes} edges={edges}>
                    <Background />
                </ReactFlow> 
            </div>
        </div>
        )
    }