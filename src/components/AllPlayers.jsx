import { Link } from 'react-router-dom'
import { useState } from 'react';
import React from 'react';
import './AllPlayers.css';


// props in App playerData 
function AllPlayers(props) {
    const [searchQuery, setSearchQuery] = useState("");

    let filteredData = props.playerData.filter((filteredPlayer) => {
      let lowercasedName = filteredPlayer.name.toLowerCase(); // This allows lowercase search to occur
      let lowercasedQuery = searchQuery.toLowerCase();  // This allows lowercase search to occur

          if(lowercasedName.includes(lowercasedQuery)) {
              return filteredPlayer
          }
  })

    return(
        <>
            <div id="meetheader">
                <h2>MEET THE PLAYERS</h2>   
            </div>  
 

            <form id="searchbar">
                  <label htmlFor="name">Search For Pup:</label>
                      <input 
                          name="search-query" 
                          type='text' 
                          placeholder='Puppy Name Here'
                          value={searchQuery}
                          onChange={(event) => {    // This allows the users to change the search.
                              console.log(event.target.value)
                              setSearchQuery(event.target.value)
                          }}
                      ></input>
                </form>


             <div id="puppylist">

        
            { // Mapping threw the filteredData to only show the filteredPlayer when searched.
            filteredData.length ? filteredData.map((filteredPlayer) => {
                return (
                    <div className='puppy-cards' key={filteredPlayer.id}>
                        <p>{filteredPlayer.name}</p>
                        <img src={filteredPlayer.imageUrl} alt="puppy pic"></img>


                        <button id="detail-button">
                            <Link to={`/players/${filteredPlayer.id}`}>Pup Details</Link>
                        </button>
                    
                    
                    </div>
                )

            }) : <p>Loading . . </p>

            }
        </div> 
     </>

 
 )

    }

export default AllPlayers