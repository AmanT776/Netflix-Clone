import React , {useState,useEffect,useRef,} from "react";
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'
import { Link } from "react-router-dom";


export default function TitleCards({title,category}){
    const [apiData,setApiData] = useState([])
    const cardsRef = useRef();
    const handleWheel = (event)=>{
        event.preventDefault()
        cardsRef.current.scrollLeft += event.deltaY
    }
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOTMwMjQ4ODZmM2E1M2Y0YzNhMTVhZjhiNjM1OWY0MiIsIm5iZiI6MTc0MTE5NzA5OS45MjgsInN1YiI6IjY3Yzg4ZjJiM2RlMzA0MjFiN2MyYjRkNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZMapfLAjzC-XTPyF-bSYSaVbvMVyDGQm9Vw4H0LdZEQ'
        }
      };

    useEffect(()=>{
         fetch(`https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`, options)
            .then(res => res.json())
            .then(data =>setApiData(data.results))
            .catch(err => console.error(err));
        cardsRef.current.addEventListener('wheel',handleWheel)
    },[])
    return(
        <div className="title-cards">
            <h2>{title?title:"Popular on Netflix"}</h2>
            <div className="card-list" ref={cardsRef}>
                {apiData.map((movie, index) => {
                    return(
                        <Link to={`/player/${movie.id}`} className="card" key={index}>
                            <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={movie.original_title} className="card-img" />
                            <p>{movie.original_title}</p>
                        </Link>
                    )
                })}
            </div>
           
        </div>
    )  
}
