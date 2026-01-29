import { useState } from "react";

function LoginToggle(){


    const [log, setLog] = useState(false)

    function loginStatus(){
        // setLog(log => !log)
        setLog(!log)
    }

    return(
        <div>
            <button onClick={loginStatus}>{log ? 'Login' : 'Logout'}</button>
            <p>{log ? 'User logged in' : 'User logged out'}</p>
        </div>
    )
}

export default LoginToggle;