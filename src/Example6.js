import React, { useState , useMemo } from 'react';

export default function Example6() {
    const [xiaohong,setXiaohong] = useState('小红在待客状态')
    const [zhiling,setZhiling] = useState('志铃在待客状态')
    return (
        <>
            <button onClick={()=>{setXiaohong(new Date().getTime())}}>小红</button>
            <button onClick={()=>{setZhiling(new Date().getTime()+'志铃向我们走来了')}}>志铃</button>
            <ChildComponent name={xiaohong}>{zhiling}</ChildComponent>
        </>
    )
}

function ChildComponent({name,children}) {
    function changeXiaohong(name){
        console.log('她来了，她来了，小红向我们走来');
        return name +'小红向我们走来了'
    }

    const actionXiaohong = useMemo(()=>changeXiaohong(name),[name])

    return(
        <>
            <div>{actionXiaohong}</div>
            <div>{children}</div>
        </>
    )
}