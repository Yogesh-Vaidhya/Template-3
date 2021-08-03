const homestyles = {
    mainheading:{
        fontFamily: "MS UI Gothic",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "48px",
        lineHeight: "48px",
        color: "#000000",
        textAlign: "left"
    },

    logocontainer:
    {
        textAlign: 'center',
        backgroundColor: 'White',
    },

    productimg: {
        width: '100%',
        height: '100%',    
        background:  "#C4C4C4",
    },

    mainContainer:{
        marginTop : '74px',
        width: '100%',
        height: '800px',
        backgroundImage: "url('https://s3-alpha-sig.figma.com/img/1fcd/147b/9ad813d5b3a44d3a31b24636e350e2bb?Expires=1628467200&Signature=DBa76S8toCnlJKWoel0uLCrDeBldeoUokaipIbzpeuR998WD-oVKZvNdl6VnaGKaixpOVpK4-ldSoX1KMCoIdgYs0HwAdZfME9Y80J73aihxhBSb~ohKP17OTXyUcrbViYK8CGzSt5Y0obiCCTKJpTxl~pAWACCzyBgQ~YqwEw9KyChPYS2HxvywYHMhkgFWEyfoJPP511nfjLc6TxOnIdpeTMx~snN5nTHmQiPp2zW09pn-VPaG6KrFdovEIqJKXCoj0F2iTIECybowtgjHA5CgpMWIKE6lzqQ4QmV2ASxBEe~c-Kr2WlBpQH3OevE8RGpcrNXLmlN94aRTnfV-rQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        position: "relative",
    },

    textContainer:{
        position: "absolute",
        width: "525px",
        height: "277px",
        background: "rgba(255, 255, 255, 0.63)",
        borderRadius: "25px 25px 0px 0px",
        bottom:"0px",
        right:"202px",
        paddingLeft: "47px",
        paddingTop: "22.03px"
    },
    tagline:{
        
        width: "200px",
        display: "block"   ,
        color: "black",
        textAlign:"left",
        marginBottom:"0px",
        /* Title */
        
        fontFamily: "Playfair Display",
        fontStyle: "normal",
        fontWeight: "900",
        fontSize: "64px",
        lineHeight: "84px",
       
        
        
        
    },
    taglineDescription:{
      fontFamily: "MS UI Gothic",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "24px",
      lineHeight: "24px",
      color: "#000000",
      textAlign: "left"
    },
    text:{
        padding : "250px 89px ",
        backgroundColor : "white",
        color : 'black'
    },
    content: {
        fontSize: '24px',
        fontWeight: 'bold',
        lineHeight: '34px',
    },
    cta: {

    },
    root: {
        boxShadow: 'none',
        textTransform: 'none',
        fontSize: 16,
        padding: '6px 12px',
        border: '1px solid',
        lineHeight: 1.5,
        backgroundColor: '#0063cc',
        borderColor: '#0063cc',
        fontFamily: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(','),
        '&:hover': {
          backgroundColor: '#0069d9',
          borderColor: '#0062cc',
          boxShadow: 'none',
        },
        '&:active': {
          boxShadow: 'none',
          backgroundColor: '#0062cc',
          borderColor: '#005cbf',
        },
        '&:focus': {
          boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
        },
      },
      ctaButton: {
        fontFamily: "MS UI Gothic",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "24px",
        lineHeight: "24px",
        borderRadius: "29px",
        color: "#ffffff",
        background: "#EBA723",
        width:"213px",
        height:"48px",
        display:"block"
      },
      
    
};

export default homestyles;