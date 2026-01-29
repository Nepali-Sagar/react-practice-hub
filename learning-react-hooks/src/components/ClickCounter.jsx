import '../style/ClickCounter.css'
import { useState } from 'react';

function ClickCounter(){

    const [count, setCount] = useState(0)

    function counterZero(){
        if (count > 0){
            setCount(prev => prev - 1)
        }
    }
    return(
        <div className="counter">
            <div className="count-display">
                <p>{count}</p>
            </div>
            <div className="count-button">
                <button onClick={()=> {
                    setCount(prev => prev + 1)
                }}>+</button>
                <button onClick={counterZero}>-</button>
            </div>
            <button onClick={()=>{
                setCount(0)
            }} className='resetBtn'>RESET</button>
        </div>
    )
}

export default ClickCounter;