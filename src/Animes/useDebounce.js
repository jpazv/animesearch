import { useRef } from "react";

export default function useDebounce(fnc, delay) {

    const timeoutRef = useRef(null)
    function debounceFn(...args) {


        window.clearTimeout(timeoutRef.current)
        timeoutRef.current = window.setTimeout(() => {
            fnc(...args)

        }, delay);
    }
    return debounceFn;
}

