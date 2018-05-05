import React from 'react';
import PropTypes from 'prop-types';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    const keys = Object.keys(props.ingredients);
    console.log(keys);
    
    let transformedIngredients = keys.map(igKey => {             
            const newArray =[...Array(props.ingredients[igKey])];
            console.log("key = ",igKey,", props.ingredients[igKey] =",props.ingredients[igKey],newArray);
            return newArray.map((_, i) => {
                return <BurgerIngredient key={igKey+i} type ={igKey} />
            }); //[,]
        })
        .reduce((arr,el) => {
            return arr.concat(el)
        }, []);
    console.log(transformedIngredients);
    if (transformedIngredients.length ==0) {
        transformedIngredients = <p>Please start adding ingredients</p>;
    }
    
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

burger.propTypes = {
    
};

export default burger;