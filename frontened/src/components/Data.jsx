import { useRecoilState, useRecoilValue } from "recoil"
import { ExpenseData, IncomeData } from "../store/Atom"
import { useEffect } from "react"

export default function Data(){
       const [incomedata,setIncomeData] = useRecoilState(IncomeData)
       const [expensedata,setExpenseData] = useRecoilState(ExpenseData)
        
    return (
        <div className="flex justify-center p-10 space-x-4">
            <div className="bg-green-500 p-10 rounded-lg shadow-2xl text-white">
                {incomedata.map(e => {return(
                    <div>
                        <div key={e._id}>
                            <h3 className="text-2xl">Income Title : {e.title} </h3>
                            <h4 className="text-1xl">Income Amount: {e.income}</h4>  
                        </div>
                        <br></br>
                    </div>
                    )})}
            </div>

            <div className=" bg-red-400 p-10 rounded-lg shadow-2xl text-white">
                {expensedata.map(e => {return(
                    <div>
                        <div key={e._id}>
                            <h3 className="text-2xl">Expense Title : {e.expensetitle} </h3>
                            <h4 className="text-1xl">Expense Amount: {e.expense}</h4>  
                        </div>
                        <br></br>
                    </div>
                    )})}
            </div>
        </div>
    )
}