import { useState } from "react";

function CharacterCounter(){

    const [count, setCount] = useState('')

    return(
        <div>
            <input type="text" value={count} onChange={(e)=>{
                setCount(e.target.value)
            }} />
            <p>Character: {count.length}</p>
        </div>
    )
}

export default CharacterCounter;