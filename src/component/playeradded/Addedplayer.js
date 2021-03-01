import React from 'react';
import './Addedplayer.css'

const Addedplayer = (props) => {
    const totalPlaers=props.totalPlaers
    
    // console.log(totalPlaers);
    let totalPlaervalue = totalPlaers.reduce((total,to)=>total+to.selary,0)
    // let name = totalPlaers.reduce((total,to)=>total+to.name,0)
    
    let name = '';
    for (let i = 0; i < totalPlaers.length; i++) {
        const element = totalPlaers[i];
        name=name+element.name+','
        
    }

    
    return (
        <div >
            <h1>Total players {totalPlaers.length}</h1>
            <p className='nameCount'><small className='small'>Total players= <span>{name}</span></small></p>
            <h1>Total players value:$ {totalPlaervalue}</h1>
        </div>
    );
};

export default Addedplayer;