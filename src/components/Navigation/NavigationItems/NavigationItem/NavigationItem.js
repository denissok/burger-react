import React from 'react';
import classes from './NavigationItem.css';

const NavigationItem = (props) => {
    return (
        <div>
            <li className={classes.NavigationItem}>
                <a href={props.link} 
                className={props.active?classes.active:null}>{props.children}</a></li>
        </div>
    );
};

export default NavigationItem;