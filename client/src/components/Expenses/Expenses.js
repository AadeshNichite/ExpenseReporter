import React, { useState } from 'react';

import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpenseFilter'
import ExpenseList from './ExpenseList';

import ExpensesChart from './ExpenseChart'

const Expenses = (props) => {
    
    const [filteredYear,setFilteredYear] = useState('2020');

    const getChangeYear = (changedYear) =>{
        setFilteredYear(changedYear)
    }

    const filteredExpense = props.items.filter(exp =>{
        return exp.date.getFullYear().toString() === filteredYear;
    })

  return (
      <div>
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeYear={getChangeYear}/>
            <ExpensesChart expense={filteredExpense}/>
            <ExpenseList item={filteredExpense}/>
        </Card>
      </div>

  );
}

export default Expenses;