import React, { useState , useEffect } from 'react';
import { BrowserRouter as Router , Route , Link } from 'react-router-dom';
export default function Example01(){
    const [ count , setCount ] = useState(0);
    useEffect(()=>{
        console.log(`useEffect=>${count}`);
        return ()=>{
            console.log("=====================");
        }
    },[count])

    function Index(){
        useEffect(()=>{
            console.log("您来了，Index");
            return ()=>{
                console.log("Index你走了");
            }
        },[])
        return <h2>Wuxianshen.com</h2>
    }

    function List(){
        useEffect(()=>{
            console.log("您来了，List");
            return ()=>{
                console.log("List你走了");
            }
        },[])
        return <h2>List Pages</h2>
    }

    return(<div>
        <p>you clicked {count}</p>
        <button onClick={()=>{setCount(count+1)}}>click me</button>
        <Router>
            <ul>
                <li><Link to="/">首页</Link></li>
                <li><Link to="/list/">列表</Link></li>
            </ul>
            <Route path="/" exact component={Index} />
            <Route path="/list/" component={List} />
        </Router>
    </div>)
}