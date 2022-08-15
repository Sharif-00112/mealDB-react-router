import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './MealDetail.css';

const MealDetail = () => {
    const {mealId} = useParams();

    const [meal, setMeal] = useState({});

    useEffect(() =>{
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
        .then(res => res.json())
        .then(data => setMeal(data.meals[0]));
    },[])
    console.log(meal)
    return (
        <div className='bg-success p-2 text-dark bg-opacity-25'>
            <img className='img-thumbnail p-1 mb-5' src={meal.strMealThumb} alt={meal.strMeal} />
            <h3>Code: {meal.idMeal}</h3>
            <h2>{meal.strMeal}</h2>
            <h3>Region: {meal.strArea}</h3>
            <h4>Category: {meal.strCategory}</h4> <hr />
            <h4>Ingredients:</h4>
            <p>{meal.strIngredient1} - {meal.strMeasure1}, {meal.strIngredient2} - {meal.strMeasure2}, {meal.strIngredient3} - {meal.strMeasure3}, {meal.strIngredient4} - {meal.strMeasure4}, {meal.strIngredient5} - {meal.strMeasure5}, {meal.strIngredient6} - {meal.strMeasure6}, {meal.strIngredient7} - {meal.strMeasure7}, {meal.strIngredient8} - {meal.strMeasure8}, {meal.strIngredient9} - {meal.strMeasure9}, {meal.strIngredient10} - {meal.strMeasure10}, {meal.strIngredient11} - {meal.strMeasure11}, {meal.strIngredient12} - {meal.strMeasure12}, {meal.strIngredient13} - {meal.strMeasure13}, {meal.strIngredient14} - {meal.strMeasure14}, {meal.strIngredient15} - {meal.strMeasure15}, {meal.strIngredient16} - {meal.strMeasure16}, {meal.strIngredient17} - {meal.strMeasure17}, {meal.strIngredient18} - {meal.strMeasure18}, {meal.strIngredient19} - {meal.strMeasure19}, {meal.strIngredient20} - {meal.strMeasure20}</p>
            <h4>Recipe:</h4>
            <p>{meal.strInstructions}</p>
            <h5><a href={meal.strYoutube}>Youtube Video</a></h5>
        </div>
    );
};

export default MealDetail;