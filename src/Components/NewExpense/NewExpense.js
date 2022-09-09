import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

import './NewExpense.css';
const NewExpense= (props)=>{
    const[isEditing,setEditing] = useState(false)
    const expenseDataHandler = (enteredExpenseData)=>{
        const expenseData = {
            id : Math.random().toString(),
            ...enteredExpenseData,
        }
        console.log(expenseData)
        props.onAddExpense(expenseData)
        setEditing(false)
    }

    const startEditingHandler = ()=>{
        setEditing(true)
    }
                                                                                                
    const stopEditingHandler = ()=>{
        setEditing(false)
    }

    return(
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing &&  <ExpenseForm onSaveExpenseData={expenseDataHandler} onCancel={stopEditingHandler}/>}
        </div>
    )
}

export default NewExpense;