  
import React from "react";
 
 
import { makeStyles } from '@material-ui/core/styles';
 
import styles from "./ProductDetailscss";
const useStyles = makeStyles(styles);
 
function ProductDetails(props){
    
    const classes=useStyles();
 
   return (
    <div className={classes.productDetailsContainer}>
        <div className={classes.PdtHeading}>
            Our Programs/Events
        </div>
        
       
        
        <div className={classes.Products}>  
       
            
                {props.products.map((product)=>(
                
                <div className={classes.pdt}  >
                    
                <img src={product.img} className={classes.pdtimage}></img>
                <div className={classes.content}>
                
                <div className={classes.heading}>{product.label}</div>
                
                <div className={classes.pdtDes}>{product.description}</div>
                   
                </div>
                </div>
                ))}
                
                
            
 
        </div>
        
    </div>
   ) ;
 
}
export default ProductDetails;
