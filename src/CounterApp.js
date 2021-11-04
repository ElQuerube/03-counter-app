import React,{useState} from 'react'
import PropTypes  from 'prop-types';

export const CounterApp = ({value}) => {

    const [counter, setCounter] = useState(value);
    
    const handleAdd = () => {
        setCounter(counter+1);
        //setCounter((c)=> c + 1);
    }

    const handleSub = () => {
        setCounter(counter-1);
    }

    const handleRes = () => {
        setCounter(value);
    }


    return (
        <>
        <h1>CounterApp</h1>
        <h2> { counter } </h2>
        <button onClick={handleAdd}>+1</button>
        <button onClick={handleRes}>reset</button>
        <button onClick={handleSub}>-1</button>
        </>
    );
}


CounterApp.propTypes = {
    value: PropTypes.number
}

CounterApp.defaultProps = {
    value : 0
}

export default CounterApp;
