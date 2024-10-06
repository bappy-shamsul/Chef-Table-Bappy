import PropTypes from 'prop-types';

const Cooklists = ({recipies}) => {
    return (
        <div>
           <h2> Want to Cook: {recipies.length}</h2>
        </div>
    );
};

Cooklists.propTypes = {
    recipies: PropTypes.array
}
export default Cooklists;