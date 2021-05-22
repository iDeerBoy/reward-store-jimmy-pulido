import { useState } from "react";

function useSwitchState(value){

    const [state, setState] = useState(value)

    const setSwitch = () => {
        setState(!state)
    }

    const setTrue = () => {
        setState(true)
    }

    return {
        state,
        setSwitch,
        setTrue
    }
}

export default useSwitchState;