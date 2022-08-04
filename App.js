import React, { useState } from 'react'
import './App.css';

const App = () => {
    const [Result, setResult] = useState('0');
    const handleClick = (e) => {
        setResult(Result.concat(e.target.name));
    }
    const clear = () => {
        setResult('');
    }
    const backspace = () => {
        setResult(Result.slice(0, Result.length - 1))//or  -1 can be used 
    }
    const calculate = () => {
        try {
            setResult(eval(Result).toString());
        } catch (err) {
            setResult('Error')
        }
    }
        return (
            <>
                <div className='container'>
                    <form>
                        <input type='text' value={Result} />
                    </form>
                    <div className='keypad'>
                        <button name="9" onClick={handleClick}id='nine' >9</button>
                        <button onClick={clear} className='bigger-button' id='clear'>Clear</button>
                        <button onClick={backspace} className='bigger-button' id='backspace'>C</button>
                        <button name="8" onClick={handleClick}id='nine'>8</button>
                        <button name="7" onClick={handleClick} >7</button>
                        <button name="*" onClick={handleClick} id='dot'className='smaller-butmulti' >&times;</button>
                        <button name="5" onClick={handleClick}id='nine'>5</button>
                        <button name="6" onClick={handleClick} >6</button>
                        <button name="-" onClick={handleClick} id='dot'className='smaller-butminus' >&ndash;</button>
                        <button name="4" onClick={handleClick}id='nine'>4</button>
                        <button name="3" onClick={handleClick} >3</button>
                        <button name="/" onClick={handleClick} id='dot'className='smaller-butdiv' >&divide;</button>
                        <button name='1' onClick={handleClick}id='nine'>1</button>
                        <button name="2" onClick={handleClick} >2</button>
                        <button name="+" onClick={handleClick}id='dot' className="smaller-button" >+</button>
                        <button name="0" onClick={handleClick}id='nine'>0</button>
                        <button name="." onClick={handleClick}  className="smaller-butdot">.</button>
                        <button onClick={calculate} id='dot' className='bigger-button' >=</button>
                    </div>
                </div>
            </>
        )
    }


    export default App
