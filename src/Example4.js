import React, { useReducer } from 'react';

export default function ReducerDemo(params) {
    const [ count , dispatch ] = useReducer((state,action)=>{
        switch(action){
            case 'add':
                return state + 1
            case 'sub':
                return state - 1
            default:
                return state
        }
    },10)
    return (
        <div>
            <div>现在的分数是：{count}</div>
            <button onClick={()=>{dispatch('add')}}>Increment</button>
            <button onClick={()=>{dispatch('sub')}}>Decrement</button>
        </div>
    )
}