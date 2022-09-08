import React,{ useState} from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expense.css";
import ExpensesFilter from "./ExpensesFilter";

function Expense(props) {
    const [filteredYear,setFilteredYear] = useState('2021');
    const changeFilterHandler = (selectedYear)=>{
        setFilteredYear(selectedYear)
    }
    return (
        <div>
            <Card className="expenses">
                    <ExpensesFilter selected={filteredYear} onChangeFilter={changeFilterHandler}/>
                    {props.expenses.map(expense =>
                            <ExpenseItem 
                            title={expense.title}
                            amount={expense.amount}
                            date={expense.date}
                            />)}
            </Card>
        </div>
    );
}

export default Expense;