import { RecoilRoot } from "recoil";
import Input from "./Input";
import Data from "./Data";
import Totalexpense from "./Totalexpense";
import Chart from "./Chart";

export default function Expense(){
    return(
        <div>
            <RecoilRoot>
                <div className="flex">
                <Chart />
                <Totalexpense />
                </div>
                <Input />
                <Data />
            </RecoilRoot>
        </div>
    )
}