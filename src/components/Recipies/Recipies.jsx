import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Recipie from '../Recipie/Recipie';
import './Recipies.css'

const Recipies = () => {
    const [recipies, setRecipies] = useState([])
    useEffect(() => {
        fetch('test.json')
            .then(res => res.json())
            .then(data => setRecipies(data))
    }, [])
    return (
        <div>
            <h1>Total Recipies: {recipies.length}</h1>
            {/* <h1>Total Recipies: {Array.isArray(recipies) ? recipies.length : 0}</h1> */}
            <div className='body-sub-container'>
                <div className='recipies-container'>
                    {
                        recipies.map(recipie => <Recipie key={recipie.recipe_id}
                            recipie={recipie}></Recipie>)
                    }
                </div>

                <div>
                    <span>
                        <h1>Want to Cook</h1>
                    </span>
                </div>
            </div>

        </div>
    );
};

Recipies.propTypes = {
    recipies: PropTypes.array

}

export default Recipies;