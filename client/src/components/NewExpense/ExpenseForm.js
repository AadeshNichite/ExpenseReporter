import React , {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) =>{

    const [enteredTitleValue , setEnterdTitle] = useState('');
    const [enteredAmountValue , setAmountValue ] = useState('');
    const[enteredDateValue, setDateValue ] = useState('');

    //Instesd of three use one is also fine
    // const [ userInput , setUserInput ] = useState({
    //     enteredTitleValue:'',
    //     enteredAmountValue:'',
    //     enteredDateValue:''
    // })

    const titleChangeHandler = (event) =>{
        setEnterdTitle(event.target.value);
        //Instead of upper one use below for single useState
        // setUserInput({
        //     ...userInput,
        //     enteredTitleValue : event.target.value
        // });
    }

    
    const amountChangeHandler = (event) =>{
        setAmountValue(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmountValue : event.target.value
        // });
        // setUserInput((prevState) =>{
        //     return {...prevState,enteredAmountValue : event.target.value}
        // })
    }

    
    const dateChangeHandler = (event) =>{
        setDateValue(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredDateValue : event.target.value
        // });
    }

    const submitHandler = (event) =>{
        event.preventDefault();

        const expense = {
            title : enteredTitleValue,
            amount : +enteredAmountValue,
            date : new Date(enteredDateValue)
        }

        // console.log(expense);
        props.onSaveExpenseData(expense);

        setEnterdTitle('');
        setAmountValue('');
        setDateValue('');
    }

    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={enteredTitleValue} onChange={titleChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" value={enteredAmountValue} min="0.01" step="0.01" onChange={amountChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" value={enteredDateValue} min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="button" onClick={props.onCancel}>Cancle</button>
            <button type="submit">Add Expense</button>
        </div>
    </form>
}
export default ExpenseForm;