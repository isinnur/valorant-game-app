import React from 'react';

const Weapons = ({ weapons }) => (
    weapons.map(weapon => (
        <div className='weapons-container' key={weapon.uuid}>
            <h4 className='weapons-name'>{weapon.displayName}</h4>
            <img className='weapons-image' src={weapon.displayIcon}></img>
        </div>
    ))
);

export default Weapons;

