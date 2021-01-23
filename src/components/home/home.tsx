import { runCommand } from '@/renderer'
import React, { FunctionComponent } from 'react'
import './home.scss'

export const HomeComponent: FunctionComponent<any> = () => {

    const takeScreenShot = () => {
        runCommand("Taking windows screenshot!").then(() => {
            console.log("Screenshot is taken!")
        })
    }
    return (
        <div className="home">
            <h1>I am home!!!</h1>
            <button onClick={takeScreenShot}>Take screenshot!</button>
        </div>
    )
}