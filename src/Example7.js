import React, { useRef , useState , useEffect } from 'react';

export default function Example7() {
    const inputEl = useRef(null)

    function onButtonClick() {
        inputEl.current.value = 'wuxianshen'
        console.log(inputEl);
    }
    const [text,setText] = useState('wuxianshen.com')
    const textEl = useRef()
    useEffect(()=>{
        textEl.current = text
        console.log('textEl.current:', textEl.current)
    })
    return(
        <>
            {/*保存input的ref到inputEl */}
            <input type="text" ref={inputEl} />
            <button onClick={onButtonClick}>在input上展示文字</button>
            <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
        </>
    )
}