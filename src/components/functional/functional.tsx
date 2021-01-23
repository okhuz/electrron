import React, { FunctionComponent, MouseEvent, useEffect, useState } from 'react';
import './functional.scss';
import osName from 'os-name'
import log from 'electron-log'

type CounterState = {
    counter: number
}

type CounterProps = {
    increment: number
}

export const FunctionalComponent: FunctionComponent<CounterProps> = (props: CounterProps) => {

    const [value, setValue] = useState({ counter: 10 })

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setValue({
            counter: value.counter + props.increment
        });
    }

    useEffect(() => {
        log.info(props);
    }, []);
    
    return (
        <div className="testComponent">
            <h1>I'm a Functional Component. My counter is {value.counter}</h1>
            <h2>{ osName() }</h2>
            <button onClick={(e) => {handleClick(e)}}>asdasd</button>
        </div>
    )
    
}



