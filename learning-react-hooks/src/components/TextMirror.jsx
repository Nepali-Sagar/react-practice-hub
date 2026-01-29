import '../style/TextMirror.css'
import { useState } from 'react';

function TextMirror(){

    const [selectText, setSelectText] = useState('')

    return(
        <div className="inputText">
            <input type="text" value={selectText} onChange={(e) => {
                setSelectText(e.target.value)
            }}/>
            <p>{selectText}</p>
        </div>
    )

    
}

export default TextMirror;