import { useState } from "react";

function useString(value){

    const [state, setState] = useState(value)

    const setString = (e) => {
        setState(e.target.value)
    }

    return {
        state,
        setString
    }
}

export default useString;