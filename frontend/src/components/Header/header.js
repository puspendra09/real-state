import React, { useEffect, useState } from "react";
import Link from 'next/link'
import styles from './../../assets/jss/HeaderStyles'
import useStyles from './../../custom-hooks/useStyles'
import { AppBar, Typography, Toolbar } from '@material-ui/core';
import MuiListItem from "@material-ui/core/ListItem";
import { withStyles } from "@material-ui/core/styles";
import Image from 'next/image'
import Grid from '@mui/material/Grid';
import Logo from './../../assets/icons/slogo.png'
import { Container } from "@mui/material";

const ListItem = withStyles({
    root: {
        margin:'0',
        "&$selected": {
            borderBottom: '3px solid #275EF5',
            background: '#fcfcfc'
        },
        "&$selected:hover": {
            borderBottom: '3px solid #275EF5',
            background: '#fcfcfc'
        }
    },
    selected: {}
})(MuiListItem);

function Header(props) {
    const classes = useStyles(styles)();
    return (
        <>
            <div className={classes.root}>
                <AppBar position="fixed" className={classes.header}>
                    <Grid container alignItems="center">
                        <Grid item xs="auto">
                            <Grid container alignItems="center">
                                <Grid item xs="auto">
                                    <div className={classes.logoCol}>
                                        <Link href="/">
                                            <Image src={Logo} alt="Logo" />
                                        </Link>
                                    </div>
                                </Grid>                                
                            </Grid>
                        </Grid>
                        <Grid xs>
                            <div className={classes.headerRight}>
                                <Grid container alignItems="center">
                                    <Grid xs="auto">
                                        <div className={classes.headerMenuTxt}>
                                            <Link href="/" >
                                                Search Candidate
                                            </Link>
                                        </div>                                        
                                    </Grid>                            
                                    <Grid xs> 
                                        <Grid container justifyContent="end" alignItems="center">
                                            <Grid item xs="auto">
                                                <div className={classes.headerMenu}>
                                                    <Link href="/">
                                                        Login
                                                    </Link>
                                                </div>
                                            </Grid>
                                            <Grid xs="auto">
                                                <div className={classes.headerMenu}>
                                                    <Link href="/" >
                                                        Signup
                                                    </Link>
                                                </div>                                        
                                            </Grid>
                                            <Grid xs="auto">
                                                <div className={classes.headerMenu}>
                                                    <Link href="/" >
                                                        Post a Job
                                                    </Link>
                                                </div>                                        
                                            </Grid>
                                            <Grid xs="auto">
                                                <div className={classes.topRightMenu}>
                                                    <Typography component="h3">
                                                        Access 20 Million+ Candidates
                                                    </Typography>
                                                    <Link href="/" >
                                                        For Employers
                                                    </Link>
                                                    <Link href="/" >
                                                        Schedule Demo (Free Trial) 
                                                    </Link>
                                                </div>                                        
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </div>
                        </Grid>
                    </Grid>
                </AppBar>
            </div>
        </>
    );
}

export default Header;
