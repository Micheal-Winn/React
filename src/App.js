
import './App.css';
import Counter from './Components/Counter';
// import ExpensiveItems from './Components/ExpensiveItems';


function App() {

  return (
    <div>
      {/* <h1>Hello World</h1>
      <ExpensiveItems></ExpensiveItems> */}

      <Counter initalValue={4} incValue={2}></Counter>
    </div>
  );
}

export default App;
