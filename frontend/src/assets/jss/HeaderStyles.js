const HeaderLayoutStyles = (theme) => ({
root: {
    flexGrow: 1,
},
menuButton: {
    marginRight: theme.spacing(2),
},
logoCol: {
    marginRight: '10px',
    padding: '0 20px',
    '& img': {
        width: '200px !important',
    }
},
headerMenu:{
    '& a':{
        color: '#fff',
        fontSize: '15px',
        width: '105px',
        height: '38px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#000',
        borderRadius: '11px !important',
        fontWeight: '500',
        border: 'solid 1px #000 !important',
        marginLeft: '15px',
    }
},
headerMenuTxt:{
    '& a':{
        color: '#222',
        fontSize: '17px',
        position: 'relative',
        fontFamily: 'CeraPro-Black',
        fontWeight: '700',
    }
},
topRightMenu:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    color: '#000',
    padding: '6px 31px',
    fontSize: '14px',
    lineHeight: '18px',
    '& h3':{
        fontSize: '18px',
        fontWeight: 'bold',
        lineHeight: '24px',
        color: '#2d3a5b',
    },
},
headerRight:{
    paddingRight: '40px',
},
header: {
    backgroundColor: "#fff",
    boxShadow: "0 0 48px rgb(0 0 0 / 6%) !important",
    borderBottom:'1px solid #e4e4e4',
    '& > .MuiGrid-root':{
        margin: '0',
    },
    "& .MuiToolbar-regular": {
      minHeight: "inherit",
      justifyContent: "space-between",
      display: "flex",
      alignItems: "center",
      "@media (max-width:767px)": {
        padding: "10px 10px",
        borderBottom: 0,
      },
      "@media (min-width:768px) and (max-width:1200px)": {
        padding: 10,
      },
    },
    "@media (max-width:767px)": {
      boxShadow: "0px 0px 6px #00000029",
    },
  },
title: {
    "& img": {
      width: 200,
      display: "block",
      "@media (max-width:767px)": {
        width: 140,
        marginLeft: 60,
      },
    },
},
menus: {
    display: "flex",
    width: "auto",
    padding: "0px 80px",
    justifyContent: "flex-start",
    background: "#fcfcfc",
    boxShadow: "0px 2px 11px #B1B1B129",
    "& a":{
      padding: "10px 10px",
      width: '100%'
    },
    "& > li": {
      width: "auto",
      marginRight: 30,
      cursor: "pointer",
      borderBottom: "3px solid transparent",
      padding: "10px 0px",
      position: 'relative',
      '& svg': {
        fontSize: '1rem'
      },
      '& ul': {
        display: 'none',
        position: 'absolute',
        top: '100%',
        backgroundColor: 'white',
        color: 'black',
        borderTop: '3px solid #2962FF',
        boxShadow: '0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)',
        "& > li": {
          width: '100%',
          // padding: '10px 10px',
          display: 'flex',
          alignItems: 'center',
          minWidth: 'max-content',
          borderTop: '1px solid rgba(36,39,44,.1)',
          position: 'relative',
          '& a': {
            fontSize: '14px',
          },
          '&:hover': {
            backgroundColor: 'rgba(0,0,0,0.05)',
          },
          '& > ul': {
            display: 'none',
            position: 'absolute',
            backgroundColor: 'white',
            width: '100%',
            border: 'none',
            minWidth: 'max-content',
            top: '0',
            left: '100%'
          },
          '&:hover ul': {
            display: 'block',
          },
        },
      },
      '&:hover > ul': {
          display: 'block',
      },
      "& div": {
        margin: 0,
        "& span": {
          color: "#000",
          fontSize: 12,
        },
      },
      "&:hover": {
        borderBottom: "3px solid #275EF5",
        "& div": {
          "& span": {
            color: "#275EF5",
          },
        },
      },
    },
    "@media (max-width:767px)": {
      display: "none",
    },
    "@media (min-width:768px) and (max-width:1200px)": {
      "& li": {
        marginRight: 15,
        padding: "10px 8px",
      },
    },
  },
  selectBoxContainer: {
    width: 180,
    background: "#fff",
    padding: "0 10px",
    border: "1px solid #ccc",
    borderRadius: 2,
    outline: 0,
    "& label": {
      top: -14,
      left: 27,
      fontSize: 12,
      pointerEvents: "none",
      color: "#000",
      zIndex: 1,
      "&.Mui-focused": {
        display: "none",
      },
      "&.MuiFormLabel-filled": {
        display: "none",
      },
      "& + .MuiInput-formControl": {
        marginTop: 0,
      },
    },
    "& > svg": {
      position: "absolute",
      right: "inherit",
      left: 5,
      color: "#008E76 !important",
    },
    "& .MuiSelect-select.MuiSelect-select": {
      paddingRight: 24,
      color: "#000",
      fontSize: 12,
      paddingLeft: 20,
      backgroundColor: "transparent !important",
    },
    "& svg": {
      right: -8,
      color: "#000",
      width: 18,
      height: 18,
      top: 7,
    },
    "& > div:before": {
      display: "none",
    },
    "& > div:after": {
      display: "none",
    },
  },
  dummyImage: {
    height: 195,
    display: "flex",
    margin: "auto",
    opacity: 0.3,
    backgroundColor: "#f2f2f2",
    "& svg": {
      width: "50%",
    },
  },
  languageDropdown: {
    marginLeft: 10,
    padding: 0,
    width: "90px",
    marginRight: 20,
    "& label": {
      display: "flex",
      alignItems: "center",
      position: "absolute",
      left: 0,
      right: 0,
      pointerEvents: "none",
      top: -18,
      justifyContent: "center",
      "& img": {
        width: 20,
        marginRight: 5,
      },
      "&.Mui-focused": {
        display: "none",
      },
      "&.MuiFormLabel-filled": {
        display: "none",
      },
      "& + .MuiInput-formControl": {
        marginTop: 0,
      },
    },
    "& .MuiSelect-select.MuiSelect-select": {
      paddingRight: 0,
      color: "#000",
      fontSize: 12,
      paddingLeft: 0,
      display: "flex",
      backgroundColor: "transparent !important",
      justifyContent: "center",
      "& img": {
        width: 20,
        marginRight: 5,
      },
    },
    "& svg": {
      display: "none",
    },
  },
  dropdownSelect: {
    "& img": {
      width: 20,
      marginRight: 5,
    },
  },
  sliderContainer: {
    "& .carousel-root": {
      "& .carousel-slider": {
        "& .control-arrow": {
          margin:"300px 0px",
        },
      },
    },
    "& .react-multiple-carousel__arrow": {
      top: "50%"
    }
  },
  sliderImage: {
    height: "650px",
    marginLeft: -10,
    width:"110%",
  },
  sliderContent: {
    position: "absolute",
    top: 0,
    right: 80,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    "& > div": {
      background: "#00000080",
      color: "#fff",
      padding: "30px 30px",
      width: 440,
      "& h2": {
        fontSize: 26,
        margin: 0,
        fontWeight: "bold",
        paddingBottom: 20,
        lineHeight: "34px",
      },
      "& p": {
        fontSize: 12,
        margin: 0,
        fontWeight: "normal",
        paddingBottom: 25,
      },
      "& button": {
        background: "#008E76",
        borderRadius: 3,
        color: "#fff",
        fontSize: 13,
        padding: "10px 20px",
        "&:hover": {
          backgroundColor: "#275EF5",
        },
      },
    },
    "@media (max-width:767px)": {
      left: 20,
      right: 20,
    },
  },
  spotlightSection: {
    padding: "35px 100px",
    "& h1": {
      fontSize: 22,
      color: "#000",
      margin: 0,
      paddingBottom: 20,
    },
    "@media (max-width:767px)": {
      padding: "25px 12px",
      "& h1": {
        fontSize: 16,
      },
    },
    "@media (min-width:768px) and (max-width:1200px)": {
      padding: "35px 10px",
    },
  },
  productBox: {
    background: "#ffff",
    boxShadow: "0px 0px 6px #00000029",
    position: "relative",
    "&:hover": {
      opacity: 1,
      transform: "scale(1.03)",
      transition: "0.5s ease",
    },
    "& img": {
      width: "100%",
      height: 165,
      display: "block",
    },
    "& > div": {
      padding: 15,
      "& h2": {
        fontSize: 15,
        color: "#000",
        margin: 0,
        "@media (max-width:767px)": {
          fontSize: 13,
        },
        "@media (min-width:768px) and (max-width:1200px)": {
          fontSize: 12,
        },
      },
      "& p": {
        fontSize: 12,
        margin: 0,
        marginTop: 8,
      },
    },
  },
  newsOnTruckSection: {
    background: "#f9f9f9",
  },
  viewAllBtns: {
    background: "#008E76",
    borderRadius: 3,
    textTransform: "capitalize",
    color: "#fff",
    fontSize: 13,
    marginLeft: "auto",
    marginTop: 30,
    display: "flex",
    padding: "8px 30px",
    "&:hover": {
      backgroundColor: "#275EF5",
    },
    "@media (max-width:767px)": {
      marginRight: 0,
    },
  },
  dateTag: {
    position: "absolute",
    left: 0,
    display: "flex",
    padding: "3px 15px",
    background: "#2962FF",
    color: "#fff",
    fontSize: 12,
    justifyContent: "center",
    "& em": {
      borderRight: "11.5px solid #275EF5",
      borderTop: "11.5px solid transparent",
      borderBottom: "11.5px solid transparent",
      position: "absolute",
      right: 0,
      top: "50%",
      marginTop: -11.5,
    },
  },
  brandCard: {
    background: "#FFFFFF",
    boxShadow: "0px 0px 11px #00000029",
    borderRadius: 3,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "10px 20px",
    cursor: "pointer",
    "& img": {
      width: 120,
      marginBottom: 10,
    },
    "& span": {
      fontSize: 14,
      color: "#000",
      fontWeight: 500,
    },
    "&:hover": {
      opacity: 1,
      transform: "scale(1.03)",
      transition: "0.5s ease",
    },
    "@media (min-width:768px) and (max-width:1200px)": {
      padding: "10px 8px",
      "& img": {
        width: "100%",
      },
      "& span": {
        fontSize: 12,
      },
    },
  },
  brandSection: {
    padding: "35px 100px 50px",
    "@media (max-width:767px)": {
      padding: "30px 12px",
    },
    "@media (min-width:768px) and (max-width:1200px)": {
      padding: "30px 10px",
    },
  },
  popularGrid: {
    padding: "35px 0",
  },
  allModels: {
    background: "#f9f9f9",
  },
  TabView: {
    backgroundColor: "transparent",
    boxShadow: "none",
    borderBottom: "1px solid #CCCCCC",
    "& .MuiTabs-flexContainer": {
      "@media (max-width:767px)": {
        height: 48,
        "&::-webkit-scrollbar": {
          width: 0,
        },
      },
    },
    "& div": {
      overflow: "inherit !important",
      "@media (max-width:767px)": {
        overflow: "visible !important",
        "&.MuiTabs-scroller.MuiTabs-scrollable": {
          overflowY: "hidden !important",
          overflowX: "scroll !important",
        },
      },
    },
    "& button": {
      position: "relative",
      minWidth: "inherit",
      padding: "6px 20px",
      marginRight: 10,
      overflow: "inherit",
      opacity: 1,
      textTransform: "capitalize",
      transition: "all 300ms",
      "& span": {
        color: "#000",
        fontSize: 13,
      },
    },
  },
  tabContentContainer: {
    marginTop: 35,
    "& > div": {
      padding: 0,
    },
    "@media (max-width:767px)": {
      "& .MuiGrid-container": {
        flexWrap: "nowrap",
        overflow: "auto",
        "& > div": {
          minWidth: "80%",
        },
        "&::-webkit-scrollbar": {
          width: 0,
        },
      },
    },
    "& ul": {
      transform: "translate3d(-100px, 0px, 0px)",
    },
    "& li": {
      float: "left",
    },
  },
  toolsServices: {
    "& ul": {
      display: "flex",
      justifyContent: "space-between",
      listStyle: "none",
      margin: 0,
      padding: 0,
      "& li": {
        background: "#fff",
        boxShadow: "0px 0px 6px #6D6D6D29",
        borderRadius: 5,
        padding: "20px 10px 0",
        width: "11.5%",
        cursor: "pointer",
        color: "#000",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        "& span": {
          fontSize: 11,
          margin: "15px 0 10px",
        },
        "& svg": {
          fill: "#2962FF",
          width: 34,
          height: 34,
        },
        "&:hover": {
          background: "#2962FF",
          color: "#fff",
          "& svg": {
            fill: "#fff",
          },
        },
      },
    },
    "@media (max-width:767px)": {
      "& ul": {
        flexWrap: "wrap",
        "& li": {
          width: "48% !important",
          marginBottom: 9,
        },
      },
    },
    "@media (min-width:768px) and (max-width:1200px)": {
      "& ul": {
        flexWrap: "wrap",
        justifyContent: "flex-start",
        "& li": {
          width: "23% !important",
          marginBottom: 15,
          marginRight: "2%",
        },
      },
    },
  },
  socialHeaderIcons: {
    display: "flex",
    alignItems: "center",
    marginLeft: 10,
    "& span": {
      display: "flex",
      marginLeft: 5,
      "&:hover": {
        opacity: 1,
        transform: "scale(1.08)",
        transition: "0.5s ease",
      },
      "& svg": {
        width: 26,
        height: 26,
      },
      "&.facebookIcon": {
        color: "#4267B2",
      },
      "&.twitterIcon": {
        color: "#50ABF1",
      },
      "&.linkedInIcon": {
        color: "#0084B1",
      },
    },
  },
  mobileSearch: {
    display: 'none',
    "@media (max-width:767px)": {
      display: "block",
    },
  },
  rightMenus: {
    display: "flex",
    alignItems: "center",
    "@media (max-width:767px)": {
      display: "none",
    },
  },
  searchContainer: {
    position: 'relative',
    fontSize: 16,
  },
  searchBar: {
    display: "flex",
    border: '1px solid gray',
    borderRadius: '30px',
    alignItems: 'center',
    padding: '5px 15px',
    "& input": {
      outline: 'none',
      border: 'none',
      // fontSize: 16,
    },
    "@media (max-width:767px)": {
      border: "none",
      padding: '15px',
      margin: 0,
      borderRadius: 0,
      backgroundColor: 'white',
      "& input": {
        marginLeft: 10,
        width: '100%',
        fontSize: 14,
      },
    },
  },
  searchResults:{
    position: 'absolute',
    backgroundColor: 'white',
    zIndex: '999999',
    maxHeight: 200,
    width: '100%',
    color: 'black',
    overflowY: 'auto',
    borderRadius: 5,
    boxShadow: '0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)',
    "& li": {
      display: 'flex',
      borderBottom: '1px solid rgba(36,39,44,.1)',
      '&:hover': {
        backgroundColor: 'rgba(0,0,0,0.05)',
      },
      "@media (max-width:767px)": {
        borderBottom: 'none',
        borderTop: '1px solid rgba(36,39,44,.1)',
      },
    },
    "& a": {
      maxWidth: '100%',
      padding: 10,
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      "& img": {
        minWidth: 25,
        maxWidth: 25,
        marginRight: 10,
      },
      "@media (max-width:767px)": {
        padding: '10px 10px 10px 20px'
      },
    },
    "@media (max-width:767px)": {
      borderRadius: 0,
      maxHeight: '100vh',
      boxShadow: 'unset',
    },
  },
  show: {
    display: 'block'
  },
  searchIcon: {
    display: 'flex',
    "& svg": {
      fill: "black",
      "@media (max-width:767px)": {
        fill: '#2962FF',
        scale: '1.5'
      },
    },
  },
  // closeIcon: {
  //   display: 'flex',
  //   "& svg": {
  //     fill: "black",
  //   }
  // },
  divider: {
    width: 1,
    height: "32px",
    background: "#EFEFEF",
    marginLeft: '2rem',
  },
  menuBar: {
    width: 50,
    height: "100%",
    justifyContent: "center",
    flexDirection: "column",
    display: "none",
    background: "#2962FF",
    position: "absolute",
    padding: "0 10px",
    left: 0,
    "& span": {
      height: 2,
      width: "100%",
      marginBottom: 5,
      background: "#fff",
      "&:last-child": {
        marginBottom: 0,
        width: 20,
      },
    },
    "@media (max-width:767px)": {
      display: "flex",
    },
  },
  sidebar: {
    position: "fixed",
    top: 0,
    bottom: 0,
    left: 0,
    width: "80%",
    background: "#fff",
    zIndex: 999,
    transform: "translate(-100%,0)",
    transition: "0.3s all linear",
    "@media (min-width:768px)": {
      display: "none",
    },
  },
  sidebarLogo: {
    display: "flex",
    justifyContent: "space-between",
    padding: "6px 10px",
    borderBottom: "1px solid #F9F9F9",
    "& img": {
      marginLeft: 0,
    },
    "& > div": {
      marginRight: 0,
    },
  },
  menuList: {
    height: "calc(100vh - 55px)",
    overflow: "auto",
    "& ul": {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      padding: 0,
      "& li": {
        color: "#000",
        width: "100%",
        borderBottom: "1px solid #F9F9F9",
        padding: 10,
        fontSize: 12,
        "& span": {
          fontSize: 12,
          fontWeight: 500,
        },
        "& img": {
          width: 24,
          marginRight: 10,
        },
      },
    },
  },
  menuButton: {
    "& button": {
      fontSize: 12,
      borderBottom: "1px solid #F9F9F9",
      textTransform: "capitalize",
      width: "100%",
      display: "flex",
      justifyContent: "flex-start",
      padding: "11px 10px",
      "& img": {
        width: 24,
        marginRight: 10,
      },
      "& svg": {
        position: "absolute",
        right: 5,
        width: 14,
        height: 14,
      },
    },
    "& > div": {
      transform: "unset !important",
      position: "static !important",
      "& > div": {
        transform: "unset !important",
        boxShadow: "none",
        backgroundColor: "#F9F9F9",
        "& ul": {
          "& li": {
            borderBottom: "1px solid #f6f6f6",
          },
        },
      },
    },
  },
});

export default HeaderLayoutStyles;
