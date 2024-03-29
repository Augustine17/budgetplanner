import React, { createContext, useState } from 'react'
export const BudgetPlannerContext = createContext();

const BudgetPlannerProvider = ({children}) => {

    const [budget,setBudget] = useState(2000);
    const [spent,setSpent] = useState(0);

    let list = localStorage.getItem('list');
  if (list !== null) {
      list = JSON.parse(list);
  } else {
    list = [];
  }

  const [name,setName] = useState('');
  const [cost,setCost] = useState(0);
  const [expenses,setExpenses] = useState([]);

  const addExpenseRow = (e) => {
    e.preventDefault();
    const arr = [...expenses];
    arr.push({name:name,cost:cost,id:arr.length+1});
    localStorage.setItem('list',JSON.stringify(arr));
    setExpenses(arr);
    setBudget(budget-cost);
    setSpent(parseInt(spent)+parseInt(cost));
    setName('');
    setCost(0);
  }

  const removeRow = (id) => {
    const arr = [...expenses];
    let deletedRow;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].id === id) {
        deletedRow = arr.splice(i,1);
        localStorage.setItem('list',JSON.stringify(arr));
        break;
      }
    }
    setExpenses(arr);
    setBudget(budget + parseInt(deletedRow[0].cost));
    setSpent(spent - deletedRow[0].cost);
  }

  return (
    <BudgetPlannerContext.Provider value={{budget,setBudget,spent,setSpent,name,setName,cost,setCost,expenses,setExpenses,addExpenseRow,removeRow}}>
        {children}
    </BudgetPlannerContext.Provider>
  )
}

export default BudgetPlannerProvider