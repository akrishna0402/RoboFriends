import React  from 'react';
import './Card.css';

const Card = (promp) => {
    return(
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img src = {`https://robohash.org/${promp.id}?200x200`} alt='asdf'/>
            <div>
                <h2>{promp.name}</h2>
                <p>{promp.email}</p>
            </div>
        </div>
    );
}

export default Card;