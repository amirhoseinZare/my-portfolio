import { useRef } from "react"

const useIsMount = ()=>{
    const isMounted = useRef(true)
    return isMounted
}

export default useIsMount