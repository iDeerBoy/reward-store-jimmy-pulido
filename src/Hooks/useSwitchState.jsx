import { useState } from "react";

function useSwitchState(value){

    const [state, setState] = useState(value)

    const setSwitch = () => {
        setState(!state)
    }

    const setTrue = () => {
        setState(true)
    }

    const setFalse = () => {
        setState(false)
    }

    return {
        state,
        setSwitch,
        setTrue,
        setFalse
    }
}

export default useSwitchState;