import React, { useState , createContext , useContext} from 'react';

const Context = createContext()

function Count(params) {
    const count = useContext(Context);
    return (<h2>{count}</h2>)
}

export default function Example01(){
    const [ count , setCount ] = useState(0);

    return(<div>
        <p>you clicked {count}</p>
        <button onClick={()=>{setCount(count+1)}}>click me</button>
        <Context.Provider value={count}>
            <Count />
        </Context.Provider>
    </div>)
}