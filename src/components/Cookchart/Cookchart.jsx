import PropTypes from 'prop-types';

const Cookchart = ({cookchart}) => {
    return (
        <div>
            <h2>{cookchart.recipe_name}</h2>
        </div>
    );
};

Cookchart.propTypes = {
    cookchartt: PropTypes.object
}
export default Cookchart;