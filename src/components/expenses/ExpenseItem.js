import React , { useState } from 'react' ;
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../ui/Card';
import CardG from '../ui/CardG';

const ExpenseItem = (props) => {

  const [ title, setTitle ] = useState(props.title);
  const [ newTitle, setNewTitle ] = useState("");

  const clickHandler = () => {
    setTitle(newTitle);
    setNewTitle("");
  }

  const changeHandler = (event) => {
    setNewTitle(event.target.value);
  }
  
  return (
    <Card className='expense-item'>
        <ExpenseDate date={props.date}></ExpenseDate>
        <div className='expense-item__description' >
            <h1>{title}</h1>
            <div className='expense-item__price' >{props.amount}</div>
        </div>

        <CardG>
        <input type='text' value={newTitle} onChange={changeHandler} />
        </CardG>

        <CardG className='button'>
        <button onClick={clickHandler}>Change Title</button>
        </CardG>
        
        
        
    </Card>
  )
}

export default ExpenseItem