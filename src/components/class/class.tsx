import React, { Component, MouseEvent } from 'react';
import './class.scss';
import osName from 'os-name'

type CounterState = {
    counter: number
}

type CounterProps = {
    increment: number
}

export default class ClassComponent extends Component<CounterProps, CounterState> {

    constructor(props: any) {
        super(props);
        this.state = {
            counter: 0
        };
    }

    handleClick = (event: MouseEvent<HTMLButtonElement>, increment: number) => {
        event.preventDefault();
        this.setState((state, props) => ({
            counter: state.counter + props.increment
        }));
    }

    render() {
        return (
            <div className="testComponent">
                <h1>I'm a Class Component. My counter is: {this.state.counter}</h1>
                <h2>{ osName() }</h2>
                <button onClick={(e) => {this.handleClick(e, 10)}}>asdasd</button>
            </div>
        )
    }
}

