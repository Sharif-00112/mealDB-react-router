import React, { useEffect, useState } from 'react';
// import Row from 'react-bootstrap/Row';
import Meal from '../Meal/Meal';
import './Restaurant.css';

const Restaurant = () => {
    const handleSearchField = e =>{
        const searchTextValue = e.target.value;
        setSearchText(searchTextValue);
    }

    const [searchText, setSearchText] = useState('');
    const [meals, setMeals] = useState([]);

    useEffect(()=> {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
        .then(res => res.json())
        .then(data => setMeals(data.meals))
    }, [searchText])

    return (
        <div>
            <div className="">
                <input className='w-75 m-4 p-2' onChange={handleSearchField} type="text" placeholder='Search Meals Here:'/>
            </div>
            <div className="mb-4">
                <h2>{meals.length} meals are available</h2>
            </div>

            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
                {
                    meals.map(meal => <Meal 
                        key={meal.idMeal} 
                        meal = {meal}
                        ></Meal>)
                }
            </div>
        </div>
    );
};

export default Restaurant;