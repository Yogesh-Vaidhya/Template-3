import React from 'react'
import data from './resource.js'
import { makeStyles } from '@material-ui/core/styles';
import styles from './Homecss';
import { Button } from '@material-ui/core';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(styles);




const Home = () => {
    const classes = useStyles();

    var home="Home";
    return (
        <>  
            <div id={"#abc"} className={classes.mainContainer}>
                <div className={classes.textContainer}>
                    <Typography className={classes.mainheading}>
                        {data.home.tagline}
                    </Typography>
                    <br/>
                    <Typography className={classes.taglineDescription}>
                        {data.home.taglineDescription}
                    </Typography>
                    <br/>
                    <Button variant="contained" className={classes.ctaButton}>
                        {data.home.exploreButton[0].label}
                    </Button>
                </div>
            </div>
        </>
    )
}

export default Home
