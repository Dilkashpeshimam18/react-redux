import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux'

const Counter = () => {

  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch()
  const toggleCounterHandler = () => { };
  const handleIncrement = () => {
    dispatch({ type: 'increment' })
  }
  const handleDecrement = () => {
    dispatch({ type: 'decrement' })
  }
  const handleIncrementBy5 = () => {
    dispatch({ type: 'incrementBy5' })
  }
  const handleDecrementBy5 = () => {
    dispatch({ type: 'decrementBy5' })
  }
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}> {counter} </div>
      <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleIncrementBy5}>IncrementBy5</button>
        <button onClick={handleDecrementBy5}>DecrementBy5</button>

      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
