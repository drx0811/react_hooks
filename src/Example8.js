import React, { useState , useEffect , useCallback } from 'react';

function useWinSize() {

    const [ size , setSize ] = useState({
        width:document.documentElement.clientWidth,
        height:document.documentElement.clientHeight
    })

    const onResize = useCallback(()=>{
        setSize({
            width:document.documentElement.clientWidth,
            height:document.documentElement.clientHeight
        })
    },[])

    useEffect(()=>{
        window.addEventListener('resize',onResize)
        return ()=>{
            window.removeEventListener('resize',onResize)
        }
    },[])

    return size
}

export default function Example8() {
    const size = useWinSize()
    return (
        <>
            页面Size:{size.width}*{size.height}
        </>
    )
}