import React, { useEffect, useState } from 'react';
import allData from '../../allData/data.json'
import Multiplayer from '../mulitplayers/Multiplayer';
import Addedplayer from '../playeradded/Addedplayer';
import './Player.css'

const Player = () => {
    const [players,setPlayrs]=useState([])
    
    useEffect(()=>{
        setPlayrs(allData)
        // console.log(allData);
    },[])

    const [totalPlaers,setTotalplaers]=useState([])
    const handleClick=(player)=>{
        // console.log('players',player);
        const newdata=[...totalPlaers, player]
        setTotalplaers(newdata)
    }

    return (
        <div className="containermain">
            {/* <h4>hello bangladesh</h4> */}
            <div className="leftSite">
                {
                    players.map(player=><Multiplayer handleClick={handleClick} player={player} key={player.id}></Multiplayer>)
                }
            </div>
            <div className="rightSite">
                <h1>Club name: Barsolona</h1>
                
                <Addedplayer totalPlaers={totalPlaers} ></Addedplayer>
            </div>
        </div>
    );
};

export default Player;