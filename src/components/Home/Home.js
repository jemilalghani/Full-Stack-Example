import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>WELCOME TO COOL COUCHES</h1>
            <Link to='/cool-couches'>
                <button>Click Here</button>
            </Link>
        </div>
    );
};

export default Home;