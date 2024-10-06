import PropTypes from 'prop-types';
import Cookchart from '../Cookchart/Cookchart';

const Cooklists = ({recipies}) => {
    return (
        <div>
           <h2> Want to Cook: {recipies.length}</h2>
           {
            recipies.map(cooklist => <Cookchart key={cooklist.recipe_id} 
                cooklist={cooklist}></Cookchart>)
           }
        </div>
    );
};

Cooklists.propTypes = {
    recipies: PropTypes.array
}
export default Cooklists;