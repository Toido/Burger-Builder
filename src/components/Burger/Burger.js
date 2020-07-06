import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';


const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients) //Converts an object into an array by getting it's (object's) keys.
        .map(ingKey => {
            return [...Array(props.ingredients[ingKey])].map((_, i) => {
                return <BurgerIngredient key={ingKey + i} type={ingKey}/>
            });
        }).reduce((arr, el)=>{
            return arr.concat(el);
        }, []);
        if (transformedIngredients.length === 0){
            transformedIngredients = <p>Please start adding ingredients!</p>
        }
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burger;