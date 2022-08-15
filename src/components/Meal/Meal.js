import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
// import Col from 'react-bootstrap/Col';
import './Meal.css';

const Meal = (props) => {
    // console.log(props.meal)

    const urlViewMealDetailsViaId = `/restaurant/meal/${props.meal.idMeal}`;

    const navigate = useNavigate();
    const handleSeeMealDetailBtnClick = () => {
        navigate(urlViewMealDetailsViaId);
    }

    return (
        <div className='col'>
            <Card>
                <Card.Img className='img-thumbnail p-4' variant="top" src={props.meal.strMealThumb}/>
                <Card.Body>
                    <Card.Title>{props.meal.strMeal}</Card.Title>
                    <p>Region: {props.meal.strArea}</p>
                    <p><small>Category: {props.meal.strTags}</small></p>
                    <Card.Text>{}</Card.Text>
                </Card.Body>
                <Card.Footer>
                <Button onClick={handleSeeMealDetailBtnClick} variant="secondary">See Details</Button>{' '}
                </Card.Footer>
            </Card>
        </div>
    );
};

export default Meal;