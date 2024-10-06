import PropTypes from 'prop-types';
import '../Cookchart/Cookchart.css'

const Cookchart = ({cooklist}) => {
    const {recipe_name, preparing_time, calories, recipe_id} = cooklist;
    return (
        <div>

            <table border="1" cellPadding="10" cellSpacing="0">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Time</th>
                        <th>Calories</th>
                    </tr>
                </thead>
                <tbody>
                    {
                     <tr >
                         <td>{recipe_id }</td>
                         <td>{recipe_name }</td>
                         <td>{preparing_time}</td>
                         <td>{calories}</td>
                         <button className='btn-preparing'>Preparing</button>
                     </tr>
                    }
                </tbody>
                
            </table>
        </div>
       
    );
};

Cookchart.propTypes = {
    cookchartt: PropTypes.object
}
export default Cookchart;