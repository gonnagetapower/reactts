import React, { FC, useState , useRef } from "react";

const EventsExample: FC = () => {
    const [value, setValue] = useState<string>('')
    const [isDrag, setIsDrag] = useState<boolean>(false)
    const inputRef = useRef<HTMLInputElement>(null)

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(value)
        console.log(inputRef.current?.value)
    }

    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
        console.log('Drag')
    }

    const dragWithPreverntHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(true)
    }

    const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(false)
    }

    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(false)
        console.log('Drop')
    }

    return (
        <div>
            <input value={value} onChange={changeHandler} type="text" placeholder="управляемые"/>
            <input ref={inputRef} type="text" placeholder="неуправляемый"/>
            <button onClick={clickHandler}>Button</button>
            <div onDrag={dragHandler} draggable style={{ width: 200, height: 200, background: "tomato" }}></div>
            <div
                onDrop={dropHandler}
                onDragLeave={leaveHandler}
                onDragOver={dragWithPreverntHandler}
                style={{ width: 200, height: 200, background: isDrag ? "blue" : "red", marginTop: 15 }}>
            </div>
        </div>
    )
}

export default EventsExample;