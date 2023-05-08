import React from 'react';

const Agents = ({ agents }) => {
    return (
        agents.map(agent => (
            <div className='agents-container' key={agent.uuid}>



                <h4 className='agents-name'>{agent.displayName}</h4>
                {/* <hr className='line' /> */}
                <img className='agents-image' src={agent.fullPortrait} alt={agent.displayName}></img>
                <div className='info'>
                    <span>Biography:</span>
                    <br />
                    {agent.description}
                    <br />
                    <br></br>
                    <span> Abilities:</span>
                    <br />
                    {agent.abilities.map(ability => ability.displayName).join(', ')}
                    <br />
                    <img className='icon-small' src={agent.displayIcon}></img>
                </div>
            </div>
        ))
    )
}

export default Agents;