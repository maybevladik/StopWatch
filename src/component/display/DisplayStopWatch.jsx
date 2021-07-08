import React from 'react';
import classes from './DisplayStopWatch.module.css'

const DisplayStopWatch = (props) => {
    return(
        <div className={classes.content}>
            <span>{(props.time.h >=10) ? props.time.h : '0' + props.time.h}</span>
            :
            <span>{(props.time.m >=10) ? props.time.m : '0' + props.time.m}</span> 
            :
            <span>{(props.time.s >=10) ? props.time.s : '0' + props.time.s}</span>
        </div>
    )
}

export default DisplayStopWatch;