import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux'
import { counterActions } from '../store/store'

const Counter = () => {
  const counter = useSelector(state => state.counter.counter)
  const showCounter = useSelector(state => state.counter.showCounter)
  const dispatch = useDispatch()
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle())
  };
  const handleIncrement = () => {
    dispatch(counterActions.increment())
  }
  const handleDecrement = () => {
    dispatch(counterActions.decrement())
  }
  const handleIncrementBy2 = () => {
    dispatch(counterActions.incrementBy2(2))
  }
  const handleDecrementBy2 = () => {
    dispatch(counterActions.decrementBy2(2))
  }
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter ? <div className={classes.value}> {counter} </div> : <div><h2>Click on toggle button</h2></div>}

      <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleIncrementBy2}>IncrementBy2</button>
        <button onClick={handleDecrementBy2}>DecrementBy2</button>

      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
