import React from 'react';
import styles from "./Aboutcss.js";
import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles(styles);

function About(props){


    
    const classes=useStyles();
    
    
    return (
        <>
        <div className={classes.container}>
        
        
        <div className={classes.col}>
                 
            <div className={classes.AboutLabel}>{props.label} </div>
            
            <br/>
            <p>{props.description}</p>
        </div>
        </div>
        </>
        );
 
 }
 
 
export default About;



























