import Expenses from "./components/expenses/Expenses";


function App() {

  let data = [
    {
      id : 'e1',
      date : new Date(23 , 3 , 2023),
      title : 'college fee',
      amount : 260
    },
    {
      id : 'e2',
      date : new Date(22 , 6 , 2022),
      title : 'tuition fee',
      amount : 300
    },
    {
      id : 'e3',
      date : new Date(27 , 7 , 2023),
      title : 'insurance charge',
      amount : 1000
    },
    {
      id : 'e4',
      date : new Date(2 , 1 , 2020),
      title : 'medical charge',
      amount : 1500
    },
    {
      id : 'e4',
      date : new Date(5 , 5 , 2023),
      title : 'bhaishi fee',
      amount : 100000
    }
  ]

  let expenseDate = new Date();
  let expenseTitle = "School Fee";
  let expenseAmount = 250;

  return (
    <div className='app_dec'>
      <Expenses data={data} />
    </div>
  );
}

export default App;
