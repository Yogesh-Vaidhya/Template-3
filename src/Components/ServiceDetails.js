
import React from "react";


import { makeStyles } from '@material-ui/core/styles';

import styles from "./ServiceDetailscss";
const useStyles = makeStyles(styles);

function ServiceDetails(props){
    
    const classes=useStyles();

   return (
    <div className={classes.productDetailsContainer}>
        <div className={classes.PdtHeading}>
        Product Details
            
            
        </div>
        
        <div className={classes.desContainer}> {props.description} </div>
        
        <div className={classes.Products}>  
       
            
                {props.products.map((product)=>(
                    <>
                <div className={classes.pdthollow}  ></div>

                <div className={classes.pdt}  >
                    
                
                <div className={classes.pdtName}  >{product.label}</div>
                
                <div className={classes.pdtContent}  >
                    
                
                
                {product.description}
                
                   
                </div>
                
                   
                </div>
                
                </>
                ))}
                
                
            

        </div>
        
    </div>
   ) ;

}
export default ServiceDetails;