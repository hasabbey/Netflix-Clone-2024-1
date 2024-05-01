import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from '../../utils/axios';
import requests from '../../utils/requests';
import './Banner.css'


const Banner = () => {
    const [movie, setMovie] = useState({});
    
    useEffect(() => {
  
        (async () => {
            try {
                const request = await axios.get(requests.fetchNetflixOriginals);
                console.log(request);
                setMovie(
                    request.data.results[
                        Math.floor(Math.random() * request.data.results.length)
                    ]
                );
            } catch (error) {
                console.log('error', error);
            }
        })();
    }, []);
    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
        
    }
    return (
      <div
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          height: "63vh",
          color: "white",
        }}
      >
        <div className="content">
          <h1 className="title">
            {movie?.title || movie?.name || movie?.original_name}
          </h1>
         {/* <div>
          document.getElementById("myButton").onclick = function() {
  alert("Button clicked!") */}

          <div className="banner_buttons">
            
            <button className="my-button" >Play</button>
            <button className="my-button">My List</button>
          </div>
          {/* </div> */}
          {/* <h1 className="description">{movie?.overview}</h1> */}
          <h1 className="description">{truncate(movie?.overview, 150)}</h1>
        </div>
        <div className="fade_bottom"></div>
      </div>
    );
}


export default Banner