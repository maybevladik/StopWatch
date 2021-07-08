import React from 'react';
import classes from './ButtonStopWatch.module.css'

const ButtonStopWatch = (props) => {
    return (
        <div className={classes.content}>
            { (props.status === 0) ?
            <div className='first_block'>
                <button onClick={props.start} className='start' >Start</button>
                </div>
                : ''}
            { (props.status === 1) ?
                <div className='second_block'>
                    <button onClick={props.stop} className='stop' >Stop</button>
                    <button onClick={props.reset} className='reset' >Reset</button>
                    <button onClick={props.wait} className='wait'>Wait</button>
                </div>
                : ''}
            { (props.status === 2) ?
                <div className='third_block'>
                    <button onClick={props.stop} className='stop' >Stop</button>
                    <button onClick={props.reset} className='reset' >Reset</button>
                    <button onClick={props.next} className='wait'>Continue</button>
                </div>
                : ''}
        </div>
    )
}

export default ButtonStopWatch;