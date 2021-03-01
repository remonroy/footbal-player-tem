import React from 'react';
import './Mulitplayer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faUserAlt } from '@fortawesome/free-solid-svg-icons';

const Multiplayer = (props) => {
    // console.log(props);
    
    const {name,selary,country,bron,img,age}=props.player
    // const handleClick=props.handleClick;
    return (
        <div className="container">
            <div className="img">
                <img src={img} alt=""/>
            </div>
            <div className="info">
                <h4>Player name: {name}</h4>
                <p><small>His age: {age}</small></p>
                <p><small>His selary: {selary}</small></p>
                <p><small>His bron: {bron}</small></p>
                <p><small>His country name: {country}</small></p>
                <button onClick={()=>props.handleClick(props.player)}><FontAwesomeIcon icon={faUserAlt} />Add player</button>
            </div>
        </div>
    );
};

export default Multiplayer;