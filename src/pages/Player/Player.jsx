import React from 'react'
import './Player.css'
import { useEffect,useState   } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
export default function Player(){
    const {id} = useParams()
    const navigate = useNavigate()
    const [apiData,setApiData] = useState({
        name: "",
        key: "",
        published_at: "",
        type: ""
    })
    console.log(id)
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOTMwMjQ4ODZmM2E1M2Y0YzNhMTVhZjhiNjM1OWY0MiIsIm5iZiI6MTc0MTE5NzA5OS45MjgsInN1YiI6IjY3Yzg4ZjJiM2RlMzA0MjFiN2MyYjRkNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZMapfLAjzC-XTPyF-bSYSaVbvMVyDGQm9Vw4H0LdZEQ'
        }
      };
    useEffect(()=>{
          fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
            .then(res => res.json())
            .then(data => setApiData(data.results[0]))
            .catch(err => console.error(err));
        },[])
    return(
        <div className="player">
            <i className="back-btn fa-solid fa-circle-arrow-left" onClick={()=>{navigate('/')}}></i>
            <iframe className='player-frame' src={`https://www.youtube.com/embed/${apiData.key}`} frameBorder={0} allowFullScreen ></iframe>
            <div className="player-info">
                <p className="video-info">Date: {apiData.published_at.slice(0,10)}</p>
                <p className="video-info">{apiData.name}</p>
                <p className="video-info">Type: {apiData.type}</p>
            </div>
        </div>
    )
}
