import React from 'react';

const Header = ({searchChange}) => {
    return (
        <div className='tc pa2'>
            <input 
            className='pa3 ba b--green bg-lightest-blue'
            type='search' 
            placeholder='Search robots'
            onChange={searchChange}
            />
        </div>
    )
}

export default Header