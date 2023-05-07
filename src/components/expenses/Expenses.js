import React from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';

const Expenses = (props) => {
  return (
    <div className='expenses'>
        <ExpenseItem 
        date={props.data[0].date} 
        title={props.data[0].title} 
        amount={props.data[0].amount} />
      
      <ExpenseItem 
        date={props.data[1].date} 
        title={props.data[1].title} 
        amount={props.data[1].amount} />
      
      <ExpenseItem 
        date={props.data[2].date} 
        title={props.data[2].title} 
        amount={props.data[2].amount} />
      
      <ExpenseItem 
        date={props.data[3].date} 
        title={props.data[3].title} 
        amount={props.data[3].amount} />
      
    </div>
  )
}

export default Expenses