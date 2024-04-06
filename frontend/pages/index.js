import React from "react";
import styles from '../src/assets/jss/MainStyles'
import useStyles from "./../src/custom-hooks/useStyles"
import BaseLayout from "./_baseLayout"

const HomePage = () => {
    const classes = useStyles(styles)();
    return (
        <BaseLayout> 
            <div className={classes.mainOuter}>
                
            </div>
        </BaseLayout>
    );
};

export default HomePage;
