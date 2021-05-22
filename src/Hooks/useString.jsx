import { useState } from "react";

function useSring(value){

    const [state, setState] = useState(value)

    const setString = (e) => {
        setState(e.target.value)
    }

    return {
        state,
        setString
    }
}

export default useSring;