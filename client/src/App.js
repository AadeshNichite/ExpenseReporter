import React,{useState} from 'react';

import Expenses from './components/Expenses/Expenses';

import NewExpense from './components/NewExpense/NewExpense'

const dummy_expense = [
  {id:'e1',title:'Insurance',amount:2000,date:new Date(2021,2,28)},
  {id:'e2',title:'Toilet Paper',amount:4000,date:new Date(2021,3,28)},
  {id:'e3',title:'Laptop',amount:10000,date:new Date(2021,1,28)},
  {id:'e4',title:'Break',amount:1000,date:new Date(2021,12,28)}
];

const App = () => {

  const [expense,setExpense] = useState(dummy_expense);

  const addFormDataToExpense = (savedData) =>{
    // setNewExpense([savedData , ...expenses])
    setExpense((prevExpense)=>{
      return [savedData, ...prevExpense];
    })
  }
  return (
    <div>
       <NewExpense onSubmitForm={addFormDataToExpense} />
       <Expenses items={expense} />
    </div>
  );
}

export default App;
