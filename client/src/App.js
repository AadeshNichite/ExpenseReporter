import React from 'react';

import Expenses from './components/Expenses/Expenses';


const App = () => {

  const expense = [
    {id:'e1',title:'Insurance',amount:2000,date:new Date(2021,2,28)},
    {id:'e2',title:'Toilet Paper',amount:4000,date:new Date(2021,3,28)},
    {id:'e3',title:'Laptop',amount:10000,date:new Date(2021,1,28)},
    {id:'e4',title:'Break',amount:1000,date:new Date(2021,12,28)}
  ];
  return (
    <div>
       <Expenses items={expense} />
    </div>
  );
}

export default App;
