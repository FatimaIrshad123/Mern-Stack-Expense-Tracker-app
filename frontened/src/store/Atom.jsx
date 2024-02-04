import axios from "axios";
import { atom, selector } from "recoil";

export const IncomeData = atom({
    key : 'IncomeData',
    default : selector({
        key : 'incomedataselector',
        get : async() => {
                let res = await axios.get('http://localhost:3000/income',{
                    headers : {
                    'Authorization' : localStorage.getItem('token')
                    }
                })
                 return res.data
        }
    })
})

export const ExpenseData = atom({
    key : 'expenseData',
    default : selector({
        key : 'expensedataselector',
        get : async() => {
                let res = await axios.get('http://localhost:3000/expense',{
                    headers : {
                    'Authorization' : localStorage.getItem('token')
                    }
                })
                 return res.data
        }
    })
})
