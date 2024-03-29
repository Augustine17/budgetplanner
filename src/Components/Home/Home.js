import React, { useContext } from "react";
import "./Home.css";
import { BudgetPlannerContext } from "../../BudgetPlannerContext";
import ExpenseRow from "../ExpenseRow/ExpenseRow";

const Home = () => {

  const {budget,spent,name,setName,cost,setCost,expenses,addExpenseRow} = useContext(BudgetPlannerContext);

  return (
    <main>

        <h1>My Budget Planner</h1>

        <div className="header">
            <div
            className="budget"
            style={{
                color: "gray",
                backgroundColor: "#F8F9FA",
                border: "1px solid #E9ECEF",
            }}
            >
            Budget: Rs. 2000
            </div>
            <div
            className="remaining"
            style={{
                color: "#198754",
                backgroundColor: "#F8F9FA",
                border: "1px solid #E9ECEF",
            }}
            >
            Remaining Rs. {budget}
            </div>
            <div
            className="spent"
            style={{
                color: "#198754",
                backgroundColor: "#CFF4FC",
                border: "1px solid #9EEAF9",
            }}
            >
            Spent so far Rs. {spent}
            </div>
        </div>

        <div className="expenses">
            <h2>Expenses</h2>
            <ul className="expense-list">

                {
                !expenses.length ? <p style={{textAlign:"center", fontSize:"x-large", color:"gray"}}>Add Data To List...</p> :
                expenses.map((expense)=> {
                    return <ExpenseRow name={expense.name} cost={expense.cost} id={expense.id} key={expense.id}/>
                })
                }

            </ul>
        </div>

        <div className="add-expenses">
            <h2>Add Expenses</h2>
            <form>
            <div className="input-fields">
                <div className="input-field">
                <label>Name</label>
                <input value={name} onChange={(e)=>setName(e.target.value)} name="name" id="name" type="text"></input>
                </div>
                <div className="input-field">
                <label>Cost</label>
                <input value={cost} onChange={(e)=>setCost(e.target.value)} name="cost" id="name" type="number"></input>
                </div>
            </div>
            <button type="submit" onClick={(e)=>addExpenseRow(e)}>Save</button>
            </form>
        </div>

    </main>
  );
};

export default Home;