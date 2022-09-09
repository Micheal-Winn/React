import React,{ useState} from "react";

import Card from "../UI/Card";
import "./Expense.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from './ExpenseList'

function Expense(props) {
    const [filteredYear,setFilteredYear] = useState('2021');
    const changeFilterHandler = (selectedYear)=>{
        setFilteredYear(selectedYear)
    }

    const filterExpenses = props.expenses.filter(expense =>{
        return expense.date.getFullYear().toString() === filteredYear;
    }
    )



    return (
        <div>
                <Card className="expenses">
                        <ExpensesFilter selected={filteredYear} onChangeFilter={changeFilterHandler}/>
                        <ExpenseList items ={filterExpenses}/>
                </Card>
        </div>
    );
}

export default Expense;