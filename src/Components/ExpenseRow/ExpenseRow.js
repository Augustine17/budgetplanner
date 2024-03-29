import React, { useContext } from 'react'
import './ExpenseRow.css';
import { BudgetPlannerContext } from '../../BudgetPlannerContext';

const ExpenseRow = ( { name, cost, id } ) => {

  const {removeRow} = useContext(BudgetPlannerContext);

  return (
    <li className="expense-list-item">
        <p>{name}</p>
        <p>Rs. {cost}</p>
        <button type="button" className="remove-list-item" onClick={()=>removeRow(id)}>
        x
        </button>
    </li>
  )
}

export default ExpenseRow