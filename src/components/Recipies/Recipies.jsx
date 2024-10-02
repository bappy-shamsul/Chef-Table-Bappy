import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Recipie from '../Recipie/Recipie';

const Recipies = () => {
    const [recipies, setRecipies] = useState([])
    useEffect(() =>{
        fetch('test.json')
        .then(res => res.json())
        .then(data => setRecipies(data))
    },[])
    return (
        <div>
            <h1>Total Recipies: {recipies.length}</h1> 
            {/* <h1>Total Recipies: {Array.isArray(recipies) ? recipies.length : 0}</h1> */}
           {
             recipies.map(recipie => <Recipie key={recipie.recipe_id}
             recipie={recipie}></Recipie>)
           }
            
        </div>
    );
};

Recipies.propTypes = {
    recipies: PropTypes.array
    
}

export default Recipies;