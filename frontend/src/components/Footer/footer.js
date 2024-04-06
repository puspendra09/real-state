import React, { useEffect, useState } from "react";
import Link from 'next/link';
import styles from '../../assets/jss/HeaderStyles'
import useStyles from '../../custom-hooks/useStyles'
import { AppBar, Typography, Toolbar } from '@material-ui/core';
import MuiListItem from "@material-ui/core/ListItem";
import { withStyles } from "@material-ui/core/styles";

const ListItem = withStyles({
    root: {
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
                <footer className={classes.header}>
                    <Toolbar>
                        <Link href="/">
                            sdfsfgd
                        </Link>
                    </Toolbar>
                </footer>
            </div>
        </>
    );
}

export default Header;
