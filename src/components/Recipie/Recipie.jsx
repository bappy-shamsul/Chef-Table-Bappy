import PropTypes from 'prop-types';

const Recipie = ({recipie}) => {
    const {recipe_id, recipe_name, ingredients, preparing_time,calories} = recipie
    return (
        <div>
            <h3>ID: {recipe_id}</h3>
            <h3>Name: {recipe_name}</h3>
            <div>
                <h4>Ingredients: {ingredients.length}</h4>
                {/* {
                    ingredients.map(ingredient => <li>ingredient</li>)
                } */}

            <ul>
                {ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li> // Looping through the array and rendering each fruit
                ))}
            </ul>
            </div>
            <p>Preparing Time: {preparing_time}</p>
            <p>Calories: {calories}</p>
        </div>
    );
};

Recipie.propTypes = {
    recipie: PropTypes.object.isRequired,
    
}
export default Recipie;