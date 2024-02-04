import { useRecoilState, useRecoilValue } from "recoil"
import { ExpenseData, IncomeData } from "../store/Atom"
import { useEffect, useState } from "react"

export default function Totalexpense(){
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
               
    return (
        <div>
            <div className='text-center text-2xl font-semibold p-10 bg-gray-200 rounded-lg shadow-lg m-12 mx-36'>
                    <h3 className='text-green-700'>Total Income : {income}</h3>               
                    <h3 className='text-red-700'>Total Expense : {expense}</h3>
                    <h3 className='text-blue-700'>Saving : {income - expense}</h3>
                </div>
        </div>
    )
}