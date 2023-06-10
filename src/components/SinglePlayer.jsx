import React from 'react'
import './SinglePlayer.css'
import { useParams } from "react-router-dom"


function SinglePlayer(props) {

    const { id } = useParams();
 
    const singlePlayer = props.playerData.filter((player) => {
        // player came from AllPlayers Componenet
        if (player.id == Number(id)) {   // Number() converts strings into numbers
            return player
        }
    })


    return(
        <div className='single-player-container'>
            <div className='single-player-card'>
                <p id='single-name'>{singlePlayer[0].name}</p>
                <p className='single-pup'>Id: {singlePlayer[0].id}</p>
                <p className='single-pup'>Breed: {singlePlayer[0].breed}</p>
                <p className='single-pup'>Status: {singlePlayer[0].status}</p>
            </div>
        </div>

    )
}




export default SinglePlayer